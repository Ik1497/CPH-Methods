export default function inject(text) {
  text = text.split(`\n`)
  text = text.map((sentence) => {
    if (sentence === ``) {
      return ``
    } else {
      return `  ${sentence}`
    }
  })
  text = text.join(`\n`)
  text = `export default {
${text}
}`
  return text
}
