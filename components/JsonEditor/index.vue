<script setup>
const props = defineProps([
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const value = ref()

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, newValue.data)
})
</script>

<template>
  <JsonEditorItem v-model="value" :type="type" />
</template>

<style scoped lang="scss">
.v-sheet {
  padding: 1rem;
}
</style>
