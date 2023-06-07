export default function (method) {
  let classes = []

  if (GetReturnClass(method.return) != undefined) {
    classes.push(...GetReturnClass(method.return))
  }

  method.fields.forEach((field) => {
    if (GetReturnClass(field.datatype) != undefined) {
      method.classes.push(...GetReturnClass(field.datatype))
    }
  })

  return [...new Set(classes)]
}
