<script setup>
const props = defineProps([
  `field`,
  `model-value`
])

console.log(props)

const emits = defineEmits([
  `update:modelValue`
])

const value = ref(props.modelValue)

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, newValue)
})
</script>

<template>
  <!-- Special Types -->
  
  <JsonEditor
  v-if="props.field.fieldData.datatype === `string` && props.field.fieldData?.type === `json`"
  v-model="value"
  />
  
  <!-- Special Options -->

  <v-combobox
    v-else-if="props.field.fieldData.suggestedItems != undefined"
    v-model="value"
    :label="props.field.fieldData.name"
    clearable
    :items="props.field.fieldData.suggestedItems"
  ></v-combobox>

  <!-- Default Types -->
  <v-text-field
    v-else-if="props.field.fieldData.datatype === `string`"
    v-model="value"
    :label="props.field.fieldData.name"
    clearable
  ></v-text-field>

  <v-text-field
    v-if="props.field.fieldData.datatype === `object`"
    v-model="value"
    :label="props.field.fieldData.name"
    hint='insert any type, make sure to include "" with strings'
    clearable
  ></v-text-field>

  <v-text-field
    v-else-if="props.field.fieldData.datatype === `int` || props.field.fieldData.datatype === `byte[]` || props.field.fieldData.datatype === `float` || props.field.fieldData.datatype === `double` || props.field.fieldData.datatype === `decimal`"
    v-model="value"
    :label="props.field.fieldData.name"
    clearable
    type="number"
  ></v-text-field>

  <v-select
    v-else-if="props.field.fieldData.datatype === `bool`"
    v-model="value"
    :label="props.field.fieldData.name"
    clearable
    :items="[`true`, `false`]"
  ></v-select>
</template>

<style scoped lang="scss">

</style>
