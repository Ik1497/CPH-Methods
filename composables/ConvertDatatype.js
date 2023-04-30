export default function (datatype, text) {
  switch (datatype) {
    case `string`:
      return `"${text}"`
    default:
      return `${text}`
  }
}