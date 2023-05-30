<script setup>
// Page
useHead(BuildMeta(`CPH Methods Admin`, `Manage the CPH Methods`))

// Vars
const createNewFileName = ref(``)
const connectApiKeyText = ref(``)
const user = ref({
  avatar_url: `https://avatars.githubusercontent.com/u/93563568?v=4`,
  name: `User`,
})

if (process.client) window.$user = user.value

// Main

const methodsData = GetMethods()
let methods = [
  {
    title: `Methods`,
    description: `Change the methods order and their visibility.`,
    tags: [`Core`, `Methods`],
    icon: `mdi-language-csharp`,
    path: `/admin/methods`,
    category: `Methods`,
    method: {
      icon: `mdi-language-csharp`,
    },
  },
  {
    title: `Terms`,
    description: `Edit the terms.`,
    tags: [`Core`, `Terms`],
    icon: `mdi-console-line`,
    path: `/admin/terms`,
    category: `Methods`,
    method: {
      icon: `mdi-console-line`,
    },
  },
  {
    title: `Classes`,
    description: `Edit the classes being used in methods.`,
    tags: [`Core`, `Terms`],
    icon: `mdi-account-group`,
    path: `/admin/classes`,
    category: `Methods`,
    method: {
      icon: `mdi-account-group`,
    },
  },
  {
    title: `Global Data`,
    description: `Edit the global data on this website.`,
    tags: [`Core`, `Global data`],
    icon: `mdi-earth`,
    path: `/admin/global-data`,
    category: `Methods`,
    method: {
      icon: `mdi-earth`,
    },
  },
  {
    title: `Visual Studio Code`,
    description: `Update the snippets from the visual studio code plugin.`,
    tags: [`Core`, `Snippets`],
    icon: `mdi-microsoft-visual-studio-code`,
    path: `/admin/visual-studio-code`,
    category: `Methods`,
    method: {
      icon: `mdi-microsoft-visual-studio-code`,
    },
  },
]

Object.entries(methodsData).forEach((methodData) => {
  let data = {
    ...methodData[1],
    subtitle: `Reference for all ${methodData[1].title} CPH Methods`,
    method: methodData[1],
    path: `/admin/method/${methodData[0]}`,
  }

  methods.push(data)
})

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
  createNewFileName.value = ``
}

async function getUser() {
  let userData = await GitFetch(`/user`, `GET`)
  if (process.client) {
    window.$user = userData
    user.value = userData
  }
}

getUser()

function connectApiKey() {
  localStorage.setItem(`CPH_METHODS_GITHUB_AUTH_KEY`, connectApiKeyText.value)
}
</script>

<template lang="pug">
LinksPageHeader(title="CPH Methods Admin" description="Manage the CPH Methods" :method="{icon: `mdi-security`}")
  template(#append-inner)
    div(:style="{display: `flex`, gap: `1rem`, alignItems: `center`, justifyContent: `center`}")
      p(:style="{fontSize: `1.5rem`, fontFamily: `Poppins`}") {{ user.name }}
      img(:src="user.avatar_url" :style="{width: `4rem`, borderRadius: `50%`}")

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
