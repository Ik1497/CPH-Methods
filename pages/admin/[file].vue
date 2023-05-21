<script setup>
// Page
definePageMeta({
  validate: (route) => {
    return GetMethodsFromCategory(route?.params?.file) != undefined
  },
})

// Vars
const route = useRoute()

const text = ref(``)
const html = ref(`Loading...`)

// Helper

// Main Functions

async function loadContent() {
  let page = await GitFetch(
    `/repos/Ik1497/CPH-Methods/contents/composables/Methods/${route?.params?.file}.js`
  )
  if (process.client) window.$currentPage = page
  update(atob(page.content))
}

function change() {
  setTimeout(() => {
    const editor = document.querySelector(`[data-file-editor]`)
    console.log(inject(editor.innerText))
  })
}

function commit() {
  console.log(`Committing`)
  if (process.client) {
    setTimeout(async () => {
      const editor = document.querySelector(`[data-file-editor]`)
      console.log(btoa(editor.innerText))

      let content = await GitFetch(
        `/repos/Ik1497/CPH-Methods/contents/composables/Methods/${route?.params?.file}.js`,
        `PUT`,
        JSON.stringify({
          message: `Updating ${window.$currentPage.name}`,
          content: btoa(inject(editor.innerText)),
          sha: window.$currentPage.sha,
        })
      )
      console.log(content)
      loadContent()
    })
  }
}

function update(content) {
  text.value = extract(content)
  html.value = Prism.highlight(
    extract(content),
    Prism.languages.javascript,
    `js`
  )
}

function extract(text) {
  text = text.trim()
  text = text.split(``)
  text.pop()
  text = text.join(``)
  text = text.replace(`export default {`, ``)
  text = text.trim()
  text = `  ${text}`
  text = text.split(`\n`)
  text = text.map((sentence) => {
    sentence = sentence.split(``)
    sentence.shift()
    sentence.shift()
    sentence = sentence.join(``)
    return sentence
  })
  text = text.join(`\n`)
  return text
}

function inject(text) {
  text = text.split(`\n`)
  text = text.map((sentence) => {
    if (sentence === ``) {
      return ``
    } else {
      return `  ${sentence}`
    }
  })
  text = text.join(`\n`)
  text = `export default {
${text}
}`
  return text
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
