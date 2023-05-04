<script setup>
const client = process.client

useHead(BuildMeta())

const methodsData = GetMethods()
let methods = []

Object.entries(methodsData).forEach(methodData => {
  let data = {
    ...methodData[1],
    subtitle: `Reference for all ${methodData[1].title} CPH Methods`,
    method: methodData[1]
  }

  methods.push(data)
});

console.log(methods)

const linksPageHeaderData = ref({})
const cardsView = ref(`grid`)

function updateLayout(e) {
  linksPageHeaderData.value = e
  cardsView.value = linksPageHeaderData.value.cardsView
}
</script>

<template>
  <LinksPageHeader
    title="CPH Methods"
    description="See a list of all Streamer.bot CPH Methods"
    :method="{icon: `mdi-language-csharp`}"
    :model-value="linksPageHeaderData"
    @update:modelValue="updateLayout"
  />

  <CardGrid v-if="client" :cards-view="cardsView" :cards="methods"></CardGrid>
</template>

<style scoped lang="scss">

</style>
