<script setup>
const props = defineProps([
  `field`,
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const field = props.field.fieldData
const datatype = field.datatype
const name = field.name

const value = ref(props.modelValue)

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, newValue)
})
</script>

<template>
  <v-text-field
    v-if="datatype === `string`"
    v-model="value"
    :label="name"
    clearable
  ></v-text-field>

  <v-text-field
    v-else-if="datatype === `int` || datatype === `byte[]` || datatype === `float` || datatype === `double` || datatype === `decimal`"
    v-model="value"
    :label="name"
    clearable
    type="number"
  ></v-text-field>

  <v-select
    v-else-if="datatype === `bool`"
    v-model="value"
    :label="name"
    clearable
    :items="[`true`, `false`]"
  ></v-select>
</template>

<style scoped lang="scss">

</style>
