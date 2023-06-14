<script setup>
const route = useRoute()

definePageMeta({
  validate: (route) => {
    return (
      GetMethod(route?.params?.category, route?.params?.method) != undefined
    )
  },
})

const method = GetMethod(route?.params?.category, route?.params?.method)
const GlobalData = GetGlobalData()
console.log(method)

useHead(
  BuildMeta(method.title, `${method.categoryName} CPH Methods reference`, {
    keywords: method.tags,
  })
)

function convertFieldText(text) {
  return text.replaceAll(`\n`, `<br>`)
}

function isArray(array) {
  return Array.isArray(array)
}
</script>

<template>
  <LinksPageHeader
    :title="method.title"
    :description="method.description"
    :method="method">
    <template
      #append-inner
      v-if="
        method?.version === GlobalData.version.stable ||
        method?.version === GlobalData.version.beta ||
        method?.version === GlobalData.version.alpha
      ">
      <v-chip size="large" label color="primary">{{
        method?.version === GlobalData.version.beta
          ? `Beta`
          : method?.version === GlobalData.version.alpha
          ? `Alpha`
          : `New`
      }}</v-chip>
    </template>
  </LinksPageHeader>

  <CPHCodeEditor :method="method"></CPHCodeEditor>

  <br />

  <template v-for="field in method.fields" :key="field">
    <h2>{{ isArray(field.name) ? field.name.join(` | `) : field.name }}</h2>
    <template v-if="field.information != undefined">
      <p v-html="convertFieldText(field.information)"></p>
      <br />
    </template>
    <p>
      Type:
      <v-code>{{
        isArray(field.datatype) ? field.datatype.join(` | `) : field.datatype
      }}</v-code>
    </p>
    <p v-if="field.default != undefined">
      Default: <v-code>{{ field.default }}</v-code>
    </p>
    <p v-if="field.nullable === true">Nullable: <v-code>true</v-code></p>
    <p v-if="field.suggestedItems != undefined">
      Suggested:
      <template
        v-for="(suggestedItem, suggestedItemIndex) in field.suggestedItems"
        :key="suggestedItemIndex"
        ><v-code>{{ suggestedItem }}</v-code
        ><template v-if="suggestedItemIndex != field.suggestedItems.length - 1"
          >,
        </template></template
      >
    </p>
    <br />
  </template>
</template>

<style scoped lang="scss">
.v-code {
  display: inline;
}
</style>
