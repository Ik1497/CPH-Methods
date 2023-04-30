export default function (datatype, text) {
  switch (text) {
    case `null`:
      return `null`
      break;
  }

  switch (datatype) {
    case `string`:
      return `"${text}"`
      break;
    default:
      return `${text}`
      break;
  }
}
