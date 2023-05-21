<script setup>
const {field, modelValue} = defineProps([`field`, `model-value`])

const emits = defineEmits([`update:modelValue`])

let value = ref(``)

onMounted(() => {
  emits(`update:modelValue`, `new DateTime(0)`)
})

watch(value, async (newValue, oldValue) => {
  if (newValue === ``) newValue = `0`
  emits(`update:modelValue`, `new DateTime(${value.value})`)
})
</script>

<template>
  <v-text-field clearable :label="field.name" v-model="value"></v-text-field>
</template>

<style scoped lang="scss"></style>
