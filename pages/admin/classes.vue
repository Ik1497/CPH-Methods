<script setup>
// Vars
const text = ref(``)

// Meta
useHead(
  BuildMeta(`Manage the classes`, `Edit the classes being used in the methods.`)
)

// Main Functions

async function loadContent() {
  let page = await GitFetch(
    `/repos/Ik1497/CPH-Methods/contents/composables/Classes/index.js`
  )

  if (process.client) window.$currentPage = page
  update(atob(page.content))
}

function commit() {
  if (process.client) {
    setTimeout(async () => {
      let content = await GitFetch(
        `/repos/Ik1497/CPH-Methods/contents/composables/Classes/index.js`,
        `PUT`,
        JSON.stringify({
          message: `Update Classes/index.js`,
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
LinksPageHeader(hide-cards-view title="Manage the classes" description="Edit the classes being used in the methods" :method="{icon: `mdi-code-json`}")

v-btn(color="primary" size="x-large" variant="tonal" @click="commit" :style="{position: `fixed`, bottom: `2rem`, right: `3rem`, paddingInline: `3rem`, zIndex: `1`}") Commit
CodeEditorJavaScript(v-model="text")
</template>

<style scoped lang="scss"></style>
