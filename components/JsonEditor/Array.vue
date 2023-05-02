<script setup>
const props = defineProps([
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const value = ref(``)

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, {
    type: `array`,
    data: newValue
  })
})
</script>

<template>
  <v-text-field
    label="Name"
    v-model="value"
  ></v-text-field>
</template>

<style scoped lang="scss">

</style>
