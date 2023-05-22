<script setup>
import Prism from "~/plugins/prism"

useHead(
  BuildMeta(
    `Visual Studio Code extension generator`,
    `Generate all the code for the Streamer.bot Visual Studio Code extension`
  )
)

let methodsFormatted = JSON.stringify(PageGetVisualStudioCode(), null, 2)

onMounted(() => {
  Prism.highlightAll()
})

const clipboardClicked = ref(false)

function copyToClipboard() {
  clipboardClicked.value = true

  navigator.clipboard.writeText(JSON.stringify(methods))

  setTimeout(() => {
    clipboardClicked.value = false
  }, 2000)
}
</script>

<template lang="pug">
v-btn(block color="primary" variant="tonal" @click="copyToClipboard")
  v-icon(v-if="clipboardClicked === true") mdi-check
  p(v-else) Copy to clipboard

pre
  code.language-json {{ methodsFormatted }}
</template>

<style scoped lang="scss"></style>
