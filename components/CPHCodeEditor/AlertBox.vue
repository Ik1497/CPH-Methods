<script setup>
const { method, end } = defineProps([
  `method`,
  `end`,
])

let endClass = ``

if (endClass === `` && method.error != undefined) endClass = `error`
if (endClass === `` && method.warning != undefined) endClass = `warning`
if (endClass === `` && method.information != undefined) endClass = `information`
if (endClass === `` && method.success != undefined) endClass = `success`
</script>

<template>
  <div :class="`alert-box-wrapper ${end != undefined ? `end` : ``}`">
    <div v-if="method.success" :class="`alert-box ${endClass === `success` ? `end` : ``}`">
      <v-alert type="success" variant="tonal"><div v-html="ParseMarkdown(method.success)"></div></v-alert>
    </div>
  
    <div v-if="method.information" :class="`alert-box ${endClass === `information` ? `end` : ``}`">
      <v-alert type="info" variant="tonal"><div v-html="ParseMarkdown(method.information)"></div></v-alert>
    </div>
  
    <div v-if="method.warning" :class="`alert-box ${endClass === `warning` ? `end` : ``}`">
      <v-alert type="warning" variant="tonal"><div v-html="ParseMarkdown(method.warning)"></div></v-alert>
    </div>
  
    <div v-if="method.error" :class="`alert-box ${endClass === `error` ? `end` : ``}`">
      <v-alert type="error" variant="tonal"><div v-html="ParseMarkdown(method.error)"></div></v-alert>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .alert-box {
    $border: 1px solid #222;

    margin-bottom: 1rem;
    padding: .1rem 1rem;

    &.end {
      border-top: $border;
      padding-top: 1rem;
    }
  }
  
  .alert-box-wrapper.end {
    .alert-box.end {
      border-bottom: none;
      padding-bottom: 1rem;
    }
  }
</style>
