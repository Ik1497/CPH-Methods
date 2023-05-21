<script setup>
const {modelValue, lang} = defineProps([`modelValue`, `lang`])

const emits = defineEmits([`update:modelValue`])

if (lang === undefined) lang = `csharp`

onMounted(() => {
  Prism.highlightAll()
})

watch(modelValue, async (newValue, oldValue) => {
  Prism.highlightAll()
})
</script>

<template lang="pug">
pre(:class="`language-${lang}`" :style="{maxWidth: `calc(100% - 2rem)`}")
  code(:class="`language-${lang}`") {{ modelValue }}
</template>

<style scoped lang="scss">
h1 {
  font-size: 5rem;
}
</style>
