<script setup>
const { modelValue, lang } = defineProps([
  `modelValue`,
  `lang`,
])

const emits = defineEmits([
  `update:modelValue`
])

if (lang === undefined) lang = `csharp`

onMounted(() => {
  Prism.highlightAll()
})

watch(modelValue, async (newValue, oldValue) => {
  Prism.highlightAll()
})
</script>

<template>
  <pre :class="`language-${lang}`" style="max-width: calc(100% - 2rem);"><code class="language-json">{{ modelValue }}</code></pre>
</template>

<style scoped lang="scss">
h1 {
  font-size: 5rem;
}
</style>
