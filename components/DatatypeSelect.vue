<script setup>
const props = defineProps([`model-value`])

const emits = defineEmits([`update:modelValue`])

const types = GetTypes()

const datatype = ref(`string`)

watch(datatype, async (newValue, oldValue) => {
  emits(`update:modelValue`, newValue)
})
</script>

<template>
  <v-select label="Datatype" :items="types" v-model="datatype"></v-select>
</template>

<style scoped lang="scss"></style>
