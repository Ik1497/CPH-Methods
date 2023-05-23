<script setup>
// Vars
const route = useRoute()

const text = ref(``)

// Main Functions

async function loadContent() {
  let page = await GitFetch(
    `/repos/Ik1497/CPH-Methods/contents/composables/Methods/index.js`
  )
  if (process.client) window.$currentPage = page
  update(atob(page.content))
}

function commit() {
  if (process.client) {
    setTimeout(async () => {
      let content = await GitFetch(
        `/repos/Ik1497/CPH-Methods/contents/composables/Methods/index.js`,
        `PUT`,
        JSON.stringify({
          message: `Update Methods/index.js`,
          content: btoa(text.value),
          sha: window.$currentPage.sha,
        })
      )

      loadContent()
    })
  }
}

function update(content) {
  text.value = content
}

// Main
if (process.client) window.$currentPage = {}

onMounted(() => {
  loadContent()
})
</script>

<template lang="pug">
v-btn(color="primary" size="x-large" variant="tonal" @click="commit" :style="{position: `fixed`, bottom: `2rem`, right: `3rem`, paddingInline: `3rem`, zIndex: `1`}") Commit
CodeEditorJavaScript(v-model="text")
</template>

<style scoped lang="scss"></style>
