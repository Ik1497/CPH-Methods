<script setup>
const route = useRoute()

definePageMeta({
  validate: (route) => {
    return GetMethodsFromCategory(route?.params?.category) != undefined
  },
})

const methodsData = GetMethods()
const method = methodsData[route?.params?.category]
let methods = []

useHead(
  BuildMeta(
    `${method.title} CPH Methods`,
    `Reference of all ${method.title} CPH Methods.`,
    {
      keywords: method.tags,
    }
  )
)

Object.entries(method.methods).forEach((methodData) => {
  let data = {
    ...methodData[1],
    subtitle: `Reference for all ${methodData[1].title} CPH Methods`,
    method: methodData[1],
  }

  methods.push(data)
})

console.log(methods)
console.log(method)

const linksPageHeaderData = ref({})
const cardsView = ref(`grid`)

function updateLayout(e) {
  linksPageHeaderData.value = e
  cardsView.value = linksPageHeaderData.value.cardsView
}
</script>

<template>
  <LinksPageHeader
    :title="method.title"
    :description="method.description"
    :method="Object.entries(method.methods)[0][1]"
    :model-value="linksPageHeaderData"
    @update:modelValue="updateLayout" />

  <CardGrid :cards-view="cardsView" :cards="methods"></CardGrid>
</template>

<style scoped lang="scss"></style>
