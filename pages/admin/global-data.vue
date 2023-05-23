<script setup>
// Vars
const text = ref(``)

// Meta
useHead(
  BuildMeta(
    `Manage the website's global data`,
    `Edit the global data on this website.`
  )
)

// Main Functions

async function loadContent() {
  let page = await GitFetch(
    `/repos/Ik1497/CPH-Methods/contents/composables/GlobalData.js`
  )

  if (process.client) window.$currentPage = page
  update(atob(page.content))
}

function commit() {
  if (process.client) {
    setTimeout(async () => {
      let content = await GitFetch(
        `/repos/Ik1497/CPH-Methods/contents/composables/GlobalData.js`,
        `PUT`,
        JSON.stringify({
          message: `Update GlobalData.js`,
          content: btoa(AdminInject(text.value)),
          sha: window.$currentPage.sha,
        })
      )

      loadContent()
    })
  }
}

function update(content) {
  text.value = AdminExtract(content)
}

// Main
if (process.client) window.$currentPage = {}

onMounted(() => {
  loadContent()
})
</script>

<template lang="pug">
LinksPageHeader(hide-cards-view title="Manage the website's global data" description="Edit the global data on this website." :method="{icon: `mdi-earth`}")

v-btn(color="primary" size="x-large" variant="tonal" @click="commit" :style="{position: `fixed`, bottom: `2rem`, right: `3rem`, paddingInline: `3rem`, zIndex: `1`}") Commit
CodeEditorJavaScript(v-model="text")
</template>

<style scoped lang="scss"></style>
