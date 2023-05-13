<script setup>
const { error } = defineProps([`error`])
</script>

<template>
  <h1>404</h1>
  <p>{{ error.message }}</p>
</template>

<style scoped lang="scss">
h1 {
  font-size: 5rem;
}
</style>
