<script setup>
const route = useRoute()

definePageMeta({
  validate: (route) => {
    return GetMethod(route?.params?.category, route?.params?.method) != undefined
  }
})

useSeoMeta({
  title: `${route.params.category} - ${route.params.method}`,
  description: `See a list of all Streamer.bot CPH Methods`,
})

const method = GetMethod(route?.params?.category, route?.params?.method)

console.log(method)

function convertFieldText(text) {
  return text.replaceAll(`\n`, `<br>`)
}

function isArray(array) {
  return Array.isArray(array)
}
</script>

<template>
  <h1>{{ method.title }}</h1>
  <p class="text-grey-lighten-1">{{ method.description }}</p>

  <v-divider style="margin-block: .75rem;"></v-divider>
  
  <CodeHighlighting v-if="method.type === `method`">
    CPH.{{ method.method }}(<template v-for="(field, fieldIndex) in method.fields"><template v-if="!isArray(field.datatype) && !isArray(field.name)">{{ field.datatype }} {{ field.name }}</template><template v-else v-for="(fieldOption, fieldOptionIndex) in field.datatype">{{ field.datatype[fieldOptionIndex] }} {{ field.name[fieldOptionIndex] }}<template v-if="fieldOptionIndex != field.datatype.length - 1"> | </template></template><template v-if="field.default"> = {{ field.default }}</template><template v-if="fieldIndex != method.fields.length - 1">, </template></template>);
  </CodeHighlighting>

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
