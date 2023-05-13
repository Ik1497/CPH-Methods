<script setup>
const { error } = defineProps([`error`])

const formatted = JSON.stringify(error, null, 2)

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <h1>500</h1>

  <Prism v-model="formatted" lang="csharp" style="max-width: calc(100% - 2rem);" />
</template>

<style scoped lang="scss">
h1 {
  font-size: 5rem;
}
</style>
