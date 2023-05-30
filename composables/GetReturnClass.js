import Classes from "./Classes/index.js"

export default function (returnValue) {
  let returnClass = {
    exists: false,
  }

  if (Classes[returnValue] != undefined) {
    returnClass.data = Classes[returnValue]
    returnClass.exists = true
    returnClass.formatted = {
      CSharp: `public class ${returnValue}
{
${Classes[returnValue].variables
  .map((entry) => {
    return `    public ${entry.datatype} ${entry.name} { get; set; }`
  })
  .join(`\n`)}
}`,
    }
  }

  return returnClass
}
