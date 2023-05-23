export default function (datatype, text) {
  switch (text) {
    case `null`:
      return `null`
  }

  switch (datatype) {
    case `string`:
      return `"${text}"`
    case `object`:
      return text
    case `float`:
      return `${text}f`
    case `int`:
      return `${parseInt(text)}`
    default:
      return text
  }
}
