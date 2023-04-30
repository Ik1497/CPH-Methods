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
  title: `${route.params.category} - ${route.params.method}`,
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
  <OgImageStatic
    component="CPHMethod"
    :title="method.title"
    :description="method.description"
  />

  <div style="display: flex; gap: 1rem;">
    <div>
      <MethodAvatar :method="method" style="height: 100%;" full-size />
    </div>
    <div>
      <h1>{{ method.title }}</h1>
      <p class="text-grey-lighten-1">{{ method.description }}</p>
    </div>
  </div>

  <v-divider style="margin-block: .75rem;"></v-divider>
  
  <CPHCodeEditor
    v-if="method.type === `method`"
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
