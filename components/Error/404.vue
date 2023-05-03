<script setup>
const props = defineProps([`error`])
</script>

<template>
  <h1>404</h1>
  <p>{{ props.error.message }}</p>
</template>

<style scoped lang="scss">
h1 {
  font-size: 5rem;
}
</style>
