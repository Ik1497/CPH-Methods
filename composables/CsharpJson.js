export default function (json) {
  let data = ``

  Object.entries(json).forEach(item => {
    data += `"${item[0]}":${item[1]}`
  });

  data = `{${data}}`

  data = data.replaceAll(`"`, `\\"`)

  return data
}
