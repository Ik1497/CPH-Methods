<script setup>
// Meta
useHead(
  BuildMeta(
    `Manage the Visual Studio Code plugin`,
    `Update the snippets from the visual studio code plugin.`
  )
)

// Main Functions

if (process.client) window.$currentPage = {}

loadContent()

async function loadContent() {
  let page = await GitFetch(
    `/repos/Ik1497/Streamerbot-VSCode-Plugin/contents/snippets/csharp.code-snippets`
  )
  if (process.client) window.$currentPage = page
}

function commit() {
  if (process.client) {
    setTimeout(async () => {
      let content = await GitFetch(
        `/repos/Ik1497/Streamerbot-VSCode-Plugin/contents/snippets/csharp.code-snippets`,
        `PUT`,
        JSON.stringify({
          message: `Update the C# Snippets`,
          content: btoa(JSON.stringify(PageGetVisualStudioCode(), null, 2)),
          sha: window.$currentPage.sha,
        })
      )
    })

    loadContent()
  }
}
</script>

<template lang="pug">
LinksPageHeader(hide-cards-view title="Manage the Visual Studio Code plugin" description="Update the snippets from the visual studio code plugin" :method="{icon: `mdi-microsoft-visual-studio-code`}")

v-btn(block color="primary" variant="tonal" @click="commit") Update the Visual Studio Code plugin
</template>

<style scoped lang="scss"></style>
