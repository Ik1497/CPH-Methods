<script setup>
const props = defineProps([`error`])

const formattedJson = JSON.stringify(props.error, null, 2)
</script>

<template>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
    <Error404 v-if="props.error.statusCode === 404" :error="props.error" />
    <p v-else>{{ formattedJson }}</p>
  </div>
</template>

<style scoped lang="scss">

</style>
