const fs = require(`fs`)

fs.readdir(`../../composables/Methods/`, function (err, files) {
  if (err) return

  let fileData = {}

  files.forEach((file, fileIndex) => {
    fs.readFile(`../../composables/Methods/${file}`, `utf8`, (err, data) => {
      if (err) return

      fileData[file.replaceAll(`.json`, ``)] = data

      if (fileIndex === files.length - 1)
        fs.writeFileSync(
          `file-data.ts`,
          `export default defineEventHandler(async () => {
return \`${JSON.stringify(fileData, null, 2).replaceAll("`", "\\`")}\`
});`
        )
    })
  })
})

function createFileAndFolder(path, content = ``) {
  let dirs = path.split(`/`)
  let fileName = dirs.reverse()[0]
  dirs.reverse().pop()

  let addingPath = ``

  dirs.forEach((dir, dirIndex) => {
    if (dirIndex === 0) addingPath += dir
    if (dirIndex > 0) addingPath += `/${dir}`

    fs.mkdirSync(addingPath, {recursive: true})
  })

  fs.writeFileSync(`${addingPath}/${fileName}`, content)
}
