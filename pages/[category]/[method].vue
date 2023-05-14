<script setup>
const route = useRoute()

definePageMeta({
  validate: (route) => {
    return GetMethod(route?.params?.category, route?.params?.method) != undefined
  }
})

const method = GetMethod(route?.params?.category, route?.params?.method)
console.log(method)

useSeoMeta({
  title: `${method.categoryName} - ${method.title}`,
  description: `${method.categoryName} CPH Methods reference`,
})

function convertFieldText(text) {
  return text.replaceAll(`\n`, `<br>`)
}

function isArray(array) {
  return Array.isArray(array)
}
</script>

<template>
  <iframe
    :src="`${method.path}/__og_image__`"
    style="width: 100%; border: none; height: 800px"
  ></iframe>

  <OgImageStatic
    component="CPHMethod"
    :method="method"
  />

  <LinksPageHeader
    hide-cards-view
    :title="method.title"
    :description="method.description"
    :method="method"
  />
  
  <CPHCodeEditor
    :method="method"
  ></CPHCodeEditor>

  <br>

  <template v-for="field in method.fields">
    <h2>{{ isArray(field.name) ? field.name.join(` | `) : field.name }}</h2>
    <template v-if="field.information != undefined">
      <p v-html="convertFieldText(field.information)"></p>
      <br>
    </template>
    <p>Type: <v-code>{{ isArray(field.datatype) ? field.datatype.join(` | `) : field.datatype }}</v-code></p>
    <p v-if="field.default != undefined">Default: <v-code>{{ field.default }}</v-code></p>
    <p v-if="field.suggestedItems != undefined">Suggested: <template v-for="(suggestedItem, suggestedItemIndex) in field.suggestedItems"><v-code>{{ suggestedItem }}</v-code><template v-if="suggestedItemIndex != field.suggestedItems.length - 1">, </template></template></p>
    <br>
  </template>
</template>

<style scoped lang="scss">
h2 {
  background: #202020;
  width: fit-content;
  padding-block: .2rem;
  padding-inline: .5rem;
  border-radius: 4px;
  margin-block: .5rem;
  font-weight: 500;
  font-family: monospace;
}

.v-code {
  display: inline;
}
</style>
