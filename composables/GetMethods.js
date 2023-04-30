import Methods from "./Methods/index.js"
import Terms from "./Terms/index.js"

export default function () {
  const formattedMethods = {}

  Object.entries(Methods).forEach(method => {
    const methodData = {}

    Object.entries(method[1]).forEach(methodName => {
      methodData[methodName[0]] = {
        ...methodName[1],
        type: `method`,
        method: methodName[0]
      }
    });

    formattedMethods[method[0]] = {
      methods: methodData
    }

    if (Terms[method[0]] != undefined) {
      formattedMethods[method[0]] = {
        ...Terms[method[0]],
        ...formattedMethods[method[0]]
      }
    }
  });

  return formattedMethods
}
