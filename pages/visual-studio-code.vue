<script setup>
import Prism from '~/plugins/prism';

let methodData = GetMethods()
let methodList = []
let methods = {}
let methodsFormatted = ``

Object.entries(methodData).forEach(([methodCategoryId, methodCategoryData]) => {
  Object.entries(methodCategoryData.methods).forEach(([methodItemName, methodItemData]) => {
    methodList.push(methodItemData)
  });
});

methodList.forEach(method => {
  let fields = ``
  let fieldsWithOptions = ``

  method.fields.forEach((field, fieldIndex) => {
    if (fieldIndex != method.fields.length - 1) {
      fields += `${field.datatype} ${field.name}${field?.default != undefined ? ` = ${field.default}` : ``}, `
      fieldsWithOptions += `\$\{${fieldIndex + 1}:${field.datatype} ${field.name}${field?.default != undefined ? ` = ${field.default}` : ``}\}, `
    } else {
      fields += `${field.datatype} ${field.name}${field?.default != undefined ? ` = ${field.default}` : ``}`
      fieldsWithOptions += `\$\{${fieldIndex + 1}:${field.datatype} ${field.name}${field?.default != undefined ? ` = ${field.default}` : ``}\}`
    }
  });

  if (method.type === `method`) {
    methods[`${method.return} ${method.method}(${fields});`] = {
      prefix: `CPH${method.methodName}`,
      body: [
        `CPH.${method.method}(${fieldsWithOptions});`
      ]
    }
  } else if (method.type === `property`) {
    methods[`${method.return} ${method.method};`] = {
      prefix: `CPH${method.methodName}`,
      body: [
        `CPH.${method.method};`
      ]
    }
  }
});

methodsFormatted = JSON.stringify(methods, null, 2)

onMounted(() => {
  Prism.highlightAll()
})

const clipboardClicked = ref(false)

function copyToClipboard() {
  clipboardClicked.value = true

  navigator.clipboard.writeText(JSON.stringify(methods))
  
  setTimeout(() => {
    clipboardClicked.value = false
    
  }, 2000);
}
</script>

<template>
  <v-btn block color="primary" variant="tonal" @click="copyToClipboard">
    <v-icon v-if="clipboardClicked === true">mdi-check</v-icon>      
    <p v-else>Copy to clipboard</p>
  </v-btn>

  <pre><code class="language-json">{{ methodsFormatted }}</code></pre>
</template>

<style scoped lang="scss">

</style>
