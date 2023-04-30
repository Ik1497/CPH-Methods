import Methods from "./Methods/index.js"
import Terms from "./Terms/index.js"

export default function () {
  const formattedMethods = {}

  Object.entries(Methods).forEach(method => {
    let methodData = {}

    // Catgories
    if (Terms[method[0]] != undefined) {
      formattedMethods[method[0]] = {
        ...Terms[method[0]],
        ...formattedMethods[method[0]],
      }
    }

    // Method
    Object.entries(method[1]).forEach(methodName => {
      methodData[methodName[0]] = {
        type: `method`,
        method: methodName[0],
        category: method[0],
        categoryName: formattedMethods[method[0]].title,
        path: `/${method[0]}/${methodName[0]}`,
        ...methodName[1],
      }

      if (Terms[method[0]]?.initials != undefined) methodData[methodName[0]].initials = Terms[method[0]]?.initials
      if (Terms[method[0]]?.image != undefined) methodData[methodName[0]].image = Terms[method[0]]?.image
      if (Terms[method[0]]?.icon != undefined) methodData[methodName[0]].icon = Terms[method[0]]?.icon
    });

    let methodsArray = Object.entries(methodData)

    methodsArray.sort((a, b) => {
      if (a.tags < b.tags) {
        return -1;
      }
      if (a.tags > b.tags) {
        return 1;
      }
      
      return 0;
    })

    methodData = Object.fromEntries(methodsArray)

    // Methods
    formattedMethods[method[0]] = {
      ...formattedMethods[method[0]],
      methods: methodData,
      path: `/Methods/${method[0]}`,
    }
  });

  return formattedMethods
}
