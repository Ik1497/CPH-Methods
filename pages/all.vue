<script setup>
import Prism from "~/plugins/prism"

useHead(
  BuildMeta(
    `List of all CPH Methods`,
    `See a list of all the available CPH methods`
  )
)

let methodData = GetMethods()
let methodList = []
let methods = []
let methodsFormatted = ``

Object.entries(methodData).forEach(([methodCategoryId, methodCategoryData]) => {
  Object.entries(methodCategoryData.methods).forEach(
    ([methodItemName, methodItemData]) => {
      methodList.push(methodItemData)
    }
  )
})

methodList.forEach((method) => {
  methods.push(method.formatted.CSharp)
})

console.log(methodList)

methodsFormatted = methods.join(`\n`)

onMounted(() => {
  Prism.highlightAll()
})

const clipboardClicked = ref(false)

function copyToClipboard() {
  clipboardClicked.value = true

  navigator.clipboard.writeText(methodsFormatted)

  setTimeout(() => {
    clipboardClicked.value = false
  }, 2000)
}
</script>

<template>
  <v-btn block color="primary" variant="tonal" @click="copyToClipboard">
    <v-icon v-if="clipboardClicked === true">mdi-check</v-icon>
    <p v-else>Copy to clipboard</p>
  </v-btn>

  <pre><code class="language-csharp">{{ methodsFormatted }}</code></pre>
</template>

<style scoped lang="scss"></style>
