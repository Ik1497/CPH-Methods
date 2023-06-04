import Classes from "./Classes/index.js"

export default function (returnValue) {
  let returnClass = {}

  if (returnValue.match(/List<([\S\s]*?)>/g)) {
    returnValue = returnValue.replace(/List<([\S\s]*?)>/g, `$1`)
  }

  if (Classes[returnValue] != undefined) {
    returnClass.data = Classes[returnValue]
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

  if (JSON.stringify(returnClass) === `{}`) {
    return undefined
  } else {
    return [returnClass]
  }
}
