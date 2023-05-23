<script setup>
useHead(BuildMeta())

const methodsData = GetMethods()
let methods = []

Object.entries(methodsData).forEach((methodData) => {
  let data = {
    ...methodData[1],
    subtitle: `Reference for all ${methodData[1].title} CPH Methods`,
    method: methodData[1],
  }

  methods.push(data)
})

console.log(methods)

const linksPageHeaderData = ref({})
const cardsView = ref(`compact-list`)

function updateLayout(e) {
  linksPageHeaderData.value = e
  cardsView.value = linksPageHeaderData.value.cardsView
}
</script>

<template lang="pug">
LinksPageHeader(title="CPH Methods" description="See a list of all Streamer.bot CPH Methods" :method="{icon: `mdi-language-csharp`}" :model-value="linksPageHeaderData" @update:modelValue="updateLayout")

CardGrid(:key="client" :cards-view="cardsView" :cards="methods")
</template>

<style scoped lang="scss"></style>
