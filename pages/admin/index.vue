<script setup>
useHead(BuildMeta(`CPH Methods Admin`, `Manage the CPH Methods`))

const methodsData = GetMethods()
let methods = []

Object.entries(methodsData).forEach((methodData) => {
  let data = {
    ...methodData[1],
    subtitle: `Reference for all ${methodData[1].title} CPH Methods Admin`,
    method: methodData[1],
    path: `/admin/${methodData[0]}`,
  }

  console.log(methodData[1])

  methods.push(data)
})

const createNewFileName = ref(``)
const connectApiKeyText = ref(``)

if (process.client) {
  connectApiKeyText.value =
    localStorage.getItem(`CPH_METHODS_GITHUB_AUTH_KEY`) || ``
}

let fileTemplate = `export default {

}`

async function createNew() {
  let file = await GitFetch(
    `/repos/Ik1497/CPH-Methods/contents/composables/Methods/${createNewFileName.value}.js`,
    `PUT`,
    JSON.stringify({
      message: `Create ${createNewFileName.value}.js`,
      content: btoa(fileTemplate),
    })
  )
  console.log(file)

  createNewFileName.value = ``
}

function connectApiKey() {
  localStorage.setItem(`CPH_METHODS_GITHUB_AUTH_KEY`, connectApiKeyText.value)
}
</script>

<template lang="pug">
LinksPageHeader(hide-cards-view title="CPH Methods Admin" description="Manage the CPH Methods" :method="{icon: `mdi-security`}")

CardGrid(:key="client" cards-view="compact-list" :cards="methods")

br

div(:style="{display: `flex`, gap: `.5rem`}")
  Dialog(title="Create new")
    v-text-field(label="File Name" v-model="createNewFileName")
    v-btn(variant="tonal" @click="createNew") Submit

  Dialog(title="New? Connect to GitHub")
    v-password-field(label="API Key" hint="Get this API Key from a project maintainer" v-model="connectApiKeyText")
    v-btn(variant="tonal" @click="connectApiKey") Connect
</template>

<style scoped lang="scss"></style>
