<script setup>
// Vars
const text = ref(``)

// Meta
useHead(BuildMeta(`Manage the terms`, `Edit the terms.`))

// Main Functions

async function loadContent() {
  let page = await GitFetch(
    `/repos/Ik1497/CPH-Methods/contents/composables/Terms/index.js`
  )

  if (process.client) window.$currentPage = page
  update(atob(page.content))
}

function commit() {
  if (process.client) {
    setTimeout(async () => {
      let content = await GitFetch(
        `/repos/Ik1497/CPH-Methods/contents/composables/Terms/index.js`,
        `PUT`,
        JSON.stringify({
          message: `Update Terms/index.js`,
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
LinksPageHeader(hide-cards-view title="Manage the terms" description="Edit the terms" :method="{icon: `mdi-console-line`}")

v-btn(color="primary" size="x-large" variant="tonal" @click="commit" :style="{position: `fixed`, bottom: `2rem`, right: `3rem`, paddingInline: `3rem`, zIndex: `1`}") Commit
CodeEditorJavaScript(v-model="text")
</template>

<style scoped lang="scss"></style>
