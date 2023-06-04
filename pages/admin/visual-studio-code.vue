<script setup>
// Meta
useHead(
  BuildMeta(
    `Manage the Visual Studio Code plugin`,
    `Update the snippets from the visual studio code plugin.`
  )
)

// Vars
const streamerbotVersion = ref(GetGlobalData()?.version?.stable)
const pluginVersion = ref(``)

// Main Functions

if (process.client) window.$currentPage = {}

loadContent()

async function loadContent() {
  const snippets = await GitFetch(
    `/repos/Ik1497/Streamerbot-VSCode-Plugin/contents/snippets/csharp.code-snippets`
  )
  if (process.client) window.$currentPage.snippets = convertContent(snippets)

  const packageData = await GitFetch(
    `/repos/Ik1497/Streamerbot-VSCode-Plugin/contents/package.json`
  )
  if (process.client) window.$currentPage.package = convertContent(packageData)
  pluginVersion.value = JSON.parse(window.$currentPage.package.content).version

  const readmeData = await GitFetch(
    `/repos/Ik1497/Streamerbot-VSCode-Plugin/contents/README.md`
  )
  if (process.client) window.$currentPage.readme = convertContent(readmeData)
}

function convertContent(content) {
  content.content = atob(content.content)
  return content
}

function commit() {
  if (process.client) {
    setTimeout(async () => {
      let snippetsContent = await GitFetch(
        `/repos/Ik1497/Streamerbot-VSCode-Plugin/contents/snippets/csharp.code-snippets`,
        `PUT`,
        JSON.stringify({
          message: `Update the C# Snippets`,
          content: btoa(JSON.stringify(PageGetVisualStudioCode(), null, 2)),
          sha: window.$currentPage.snippets.sha,
        })
      )

      setTimeout(async () => {
        let packageData = JSON.parse(window.$currentPage.package.content)
        packageData.version = pluginVersion.value
        packageData.displayName = `Streamer.bot C# Snippets v${streamerbotVersion.value}`

        let packageContent = await GitFetch(
          `/repos/Ik1497/Streamerbot-VSCode-Plugin/contents/package.json`,
          `PUT`,
          JSON.stringify({
            message: `Update package.json`,
            content: btoa(`${JSON.stringify(packageData, null, 2)}\n`),
            sha: window.$currentPage.package.sha,
          })
        )

        setTimeout(async () => {
          let readmeContent = await GitFetch(
            `/repos/Ik1497/Streamerbot-VSCode-Plugin/contents/README.md`,
            `PUT`,
            JSON.stringify({
              message: `Update README.md`,
              content: btoa(
                `## Features\n\nSnippets for all Streamer.bot v${streamerbotVersion.value} CPH methods; using directives; and code templates`
              ),
              sha: window.$currentPage.readme.sha,
            })
          )
        }, 1000)
      }, 1000)
    }, 100)

    loadContent()
  }
}
</script>

<template lang="pug">
LinksPageHeader(hide-cards-view title="Manage the Visual Studio Code plugin" description="Update the snippets for the visual studio code plugin" :method="{icon: `mdi-microsoft-visual-studio-code`}")

v-text-field(label="Streamer.bot Version" v-model="streamerbotVersion")
v-text-field(label="Plugin Version" v-model="pluginVersion")

v-btn(block color="primary" variant="tonal" @click="commit") Update the Visual Studio Code plugin

br

div(:style="{width: `100%`, display: `flex`, gap: `.5rem`, justifyContent: `center`}")
  a(href="https://github.com/Ik1497/Streamerbot-VSCode-Plugin/actions" target="_blank") Download Last Update
  span •
  a(href="https://marketplace.visualstudio.com/manage/publishers/ik1497" target="_blank") Publish Extension
</template>

<style scoped lang="scss"></style>
