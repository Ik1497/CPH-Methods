<script setup>
// Vars
const route = useRoute()

const text = ref(``)
const html = ref(`Loading...`)

// Main Functions

async function loadContent() {
  let page = await GitFetch(
    `/repos/Ik1497/CPH-Methods/contents/composables/Methods/index.js`
  )
  if (process.client) window.$currentPage = page
  update(atob(page.content))
}

function change() {
  setTimeout(() => {
    const editor = document.querySelector(`[data-file-editor]`)
  })
}

function commit() {
  if (process.client) {
    setTimeout(async () => {
      const editor = document.querySelector(`[data-file-editor]`)

      let content = await GitFetch(
        `/repos/Ik1497/CPH-Methods/contents/composables/Methods/index.js`,
        `PUT`,
        JSON.stringify({
          message: `Update Methods/index.js`,
          content: btoa(editor.innerText),
          sha: window.$currentPage.sha,
        })
      )
      loadContent()
    })
  }
}

function update(content) {
  text.value = content
  html.value = Prism.highlight(content, Prism.languages.javascript, `js`)
}

// Main
if (process.client) window.$currentPage = {}

onMounted(() => {
  loadContent()
})
</script>

<template lang="pug">
pre(class="language-js" contenteditable="true" data-file-editor v-html="html" @keydown="change")
v-btn(block color="primary" variant="tonal" @click="commit") Commit
</template>

<style scoped lang="scss"></style>
