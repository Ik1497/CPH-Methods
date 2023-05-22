export default function () {
  let methodData = GetMethods()
  let methodList = []
  let methods = {}

  Object.entries(methodData).forEach(
    ([methodCategoryId, methodCategoryData]) => {
      Object.entries(methodCategoryData.methods).forEach(
        ([methodItemName, methodItemData]) => {
          methodList.push(methodItemData)
        }
      )
    }
  )

  methodList.forEach((method) => {
    let fields = ``
    let fieldsWithOptions = ``

    method.fields.forEach((field, fieldIndex) => {
      if (fieldIndex != method.fields.length - 1) {
        fields += `${field.datatype} ${field.name}${
          field?.default != undefined ? ` = ${field.default}` : ``
        }, `
        fieldsWithOptions += `\$\{${fieldIndex + 1}:${field.datatype}${
          field.nullable === true ? `?` : ``
        } ${field.name}${
          field?.default != undefined ? ` = ${field.default}` : ``
        }\}, `
      } else {
        fields += `${field.datatype} ${field.name}${
          field?.default != undefined ? ` = ${field.default}` : ``
        }`
        fieldsWithOptions += `\$\{${fieldIndex + 1}:${field.datatype}${
          field.nullable === true ? `?` : ``
        } ${field.name}${
          field?.default != undefined ? ` = ${field.default}` : ``
        }\}`
      }
    })

    if (method.type === `method`) {
      methods[`${method.return} ${method.method}(${fields});`] = {
        prefix: `CPH${method.methodName}`,
        description: method.description,
        body: [
          `CPH.${method.method}${
            method.return === `T` ? `<${method.return}>` : ``
          }(${fieldsWithOptions});`,
        ],
      }
    } else if (method.type === `property`) {
      methods[`${method.return} ${method.method};`] = {
        prefix: `CPH${method.methodName}`,
        description: method.description,
        body: [`CPH.${method.method};`],
      }
    }
  })

  return methods
}
