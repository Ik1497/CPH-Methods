export default function extract(text) {
  text = text.trim()
  text = text.split(``)
  text.pop()
  text = text.join(``)
  text = text.replace(`export default {`, ``)
  text = text.trim()
  text = `  ${text}`
  text = text.split(`\n`)
  text = text.map((sentence) => {
    sentence = sentence.split(``)
    sentence.shift()
    sentence.shift()
    sentence = sentence.join(``)
    return sentence
  })
  text = text.join(`\n`)
  return text
}
