import Showdown from 'showdown'
import ParseMarkdownVuetifyExtension from './ParseMarkdown/vuetifyExtension'

let converter = new Showdown.Converter({
  extensions: [
    ParseMarkdownVuetifyExtension,
  ]
})

converter.setOption(`tables`, true)
converter.setOption(`emoji`, true)
converter.setOption(`excludeTrailingPunctuationFromURLs`, true)
converter.setOption(`ghCompatibleHeaderId`, true)
converter.setOption(`metadata`, true)
converter.setOption(`noHeaderId`, true)
converter.setOption(`omitExtraWLInCodeBlocks`, true)
converter.setOption(`openLinksInNewWindow`, true)
converter.setOption(`parseImgDimensions`, true)
converter.setOption(`simplifiedAutoLink`, true)
converter.setOption(`strikethrough`, true)
converter.setOption(`tasklists`, true)
converter.setOption(`underline`, true)

export default function (markdown = ``) {
  if (markdown === `` || markdown === undefined || markdown === null) return ``
  markdown = markdown.trim()
  if (Array.isArray(markdown)) markdown.join(`\n`)

  console.log(markdown)
  
  let html = converter.makeHtml(markdown)
    .replaceAll(`\n`, `<br>`)

  return html
}
