<script setup>
// Page
definePageMeta({
  validate: (route) => {
    return GetMethodsFromCategory(route?.params?.file) != undefined
  },
})

// Vars
const route = useRoute()

const text = ref(`Loading...`)

// Main Functions

async function loadContent() {
  let page = await GitFetch(
    `/repos/Ik1497/CPH-Methods/contents/composables/Methods/${route?.params?.file}.js`
  )

  if (process.client) window.$currentPage = page
  update(atob(page.content))
}

function commit() {
  if (process.client) {
    setTimeout(async () => {
      let content = await GitFetch(
        `/repos/Ik1497/CPH-Methods/contents/composables/Methods/${route?.params?.file}.js`,
        `PUT`,
        JSON.stringify({
          message: `Update ${window.$currentPage.name}`,
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
v-btn(color="primary" size="x-large" variant="tonal" @click="commit" :style="{position: `fixed`, bottom: `2rem`, right: `3rem`, paddingInline: `3rem`}") Commit
CodeEditorJavaScript(v-model="text")
</template>

<style scoped lang="scss"></style>
