<script setup>
const props = defineProps([
  `field`,
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const value = ref(props.modelValue)
const checkbox = ref(true)

console.log(props.field)

watch(value, async (newValue, oldValue) => {
  if (!checkbox.value) {
    emits(`update:modelValue`, ``)
  } else {
    emits(`update:modelValue`, newValue)
  }
})

watch(checkbox, async (newValue, oldValue) => {
  if (!checkbox.value) {
    emits(`update:modelValue`, ``)
  } else {
    emits(`update:modelValue`, value.value)
  }
})
</script>

<template>
  <div style="display: flex; gap: 1rem;">
    <div v-if="props.field.fieldData.default != undefined">
      <v-checkbox v-model="checkbox"></v-checkbox>
    </div>
    
    <div style="width: 100%;">
      <!-- Special Types -->
    
      <JsonEditor
        v-if="props.field.fieldData.datatype === `string` && props.field.fieldData?.type === `json`"
        v-model="value"
      />
      <List
        v-if="props.field.fieldData.datatype.match(/List<([\S\s]*?)>/g)"
        :field="{
          ...props.field.fieldData,
          datatype: props.field.fieldData.datatype.replace(/List<([\S\s]*?)>/g, `$1`)
        }"
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
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
