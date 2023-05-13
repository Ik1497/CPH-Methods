<script setup>
const { error } = defineProps([`error`])

const formattedJson = JSON.stringify(error, null, 2)
</script>

<template>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
    <Error404 v-if="error.statusCode === 404" :error="error" />
    <Error500 v-if="error.statusCode === 500" :error="error" />
    <Prism v-else v-model="formattedJson" lang="json"></Prism>
  </div>
</template>

<style scoped lang="scss">

</style>
