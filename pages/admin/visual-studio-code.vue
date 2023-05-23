<script setup>
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
v-btn(block color="primary" variant="tonal" @click="commit") Update the Visual Studio Code plugin
</template>

<style scoped lang="scss"></style>
