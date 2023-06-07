export default function () {
  let methodData = GetMethods()
  let methodList = []
  let methods = ``

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
        fieldsWithOptions += `${field.datatype}${
          field.nullable === true ? `?` : ``
        } ${field.name}${
          field?.default != undefined ? ` = ${field.default}` : ``
        }, `
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
      methods += `<CodeSnippet Format="1.0.0">
  <Header>
    <Title>${method.formatted.CPH}</Title>
    <Author>Ik1497</Author>
    <Description>${method.description}</Description>
    <Shortcut>CPH.${method.methodName}</Shortcut>
    <SnippetTypes>
      <SnippetType>Expansion</SnippetType>
    </SnippetTypes>
  </Header>
  <Snippet>
    <Code Language="CSharp">
      <![CDATA[CPH${method.method}${
        method.return === `T` ? `<${method.return}>` : ``
      }(${fieldsWithOptions});$end$]]>
    </Code>
  </Snippet>
</CodeSnippet>
`
    }
    // else if (method.type === `property`) {
    //   methods[`${method.return} ${method.method};`] = {
    //     prefix: `CPH${method.methodName}`,
    //     description: method.description,
    //     body: [`CPH.${method.method};`],
    //   }
    // }
  })

  methods = methods.trim()

  methods = `<?xml version="1.0" encoding="utf-8"?>
<CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
${methods
  .split(`\n`)
  .map((line) => {
    return `  ${line}`
  })
  .join(`\n`)}
</CodeSnippets>
`

  return methods
}
