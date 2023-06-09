import Methods from "./Methods/index.js"
import Terms from "./Terms/index.js"
import ConvertDatatype from "./ConvertDatatype.js"
import GetClassesForMethod from "./GetClassesForMethod.js"

export default function () {
  const formattedMethods = {}

  Object.entries(Methods).forEach((method) => {
    let methodData = {}

    // Catgories
    if (Terms[method[0]] != undefined) {
      formattedMethods[method[0]] = {
        ...Terms[method[0]],
        ...formattedMethods[method[0]],
      }
    }

    // Method
    Object.entries(method[1]).forEach((methodName) => {
      methodData[methodName[0]] = {
        type: `method`,
        method: methodName[0],
        methodName: methodName[0],
        category: method[0],
        categoryName: formattedMethods[method[0]].title,
        path: `/${method[0]}/${methodName[0]}`,
        version: formattedMethods[method[0]].version || `N/A`,
        usingDirectives: [],
        formatted: {
          CPH: ``,
          CSharp: ``,
        },
        ...methodName[1],
      }

      methodData[methodName[0]].fields.forEach((item) => {
        if (item.datatype.match(/List<([\S\s]*?)>/g)) {
          methodData[methodName[0]].usingDirectives.push(
            `System.Collections.Generic`
          )
        }
      })

      methodData[methodName[0]].usingDirectives = [
        ...new Set(methodData[methodName[0]].usingDirectives),
      ]

      if (Terms[method[0]]?.initials != undefined)
        methodData[methodName[0]].initials = Terms[method[0]]?.initials
      if (Terms[method[0]]?.image != undefined)
        methodData[methodName[0]].image = Terms[method[0]]?.image
      if (Terms[method[0]]?.icon != undefined)
        methodData[methodName[0]].icon = Terms[method[0]]?.icon

      methodData[methodName[0]].classes = GetClassesForMethod(
        methodData[methodName[0]]
      )

      methodData[methodName[0]].formatted.CPH = `CPH.${
        methodData[methodName[0]].method
      }();`

      if (methodData[methodName[0]].type === `property`) {
        methodData[methodName[0]].formatted.CSharp = `${
          methodData[methodName[0]].return
        } ${methodData[methodName[0]].method};`
      } else {
        methodData[methodName[0]].formatted.CSharp = `${
          methodData[methodName[0]].return
        } ${methodData[methodName[0]].method}${
          methodData[methodName[0]].return === `T` ? `<T>` : ``
        }(${methodData[methodName[0]].fields
          .map((field) => {
            return `${field.datatype}${field.nullable === true ? `?` : ``} ${
              field.name
            }${
              field?.default != undefined
                ? ` = ${ConvertDatatype(field.datatype, field.default)}`
                : ``
            }`
          })
          .join(`, `)});`
      }
    })

    let methodsArray = Object.entries(methodData)

    methodsArray.sort((a, b) => {
      if (a.tags < b.tags) {
        return -1
      }
      if (a.tags > b.tags) {
        return 1
      }

      return 0
    })

    methodData = Object.fromEntries(methodsArray)

    // Methods
    formattedMethods[method[0]] = {
      ...formattedMethods[method[0]],
      methods: methodData,
      path: `/${method[0]}`,
    }
  })

  return formattedMethods
}
