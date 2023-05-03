export default function (
  title = `Streamer.bot CPH Methods Builder`,
  description = `Build any Streamer.bot C# CPH method.`,
  options = {}
) {
  return {
    title,
    meta: [
      { name: `og:title`, content: title },
      { name: `twitter:title`, content: title },
      { name: `description`, content: description },
      { name: `og:description`, content: description },
      { name: `twitter:description`, content: description },
    ]
  }
}