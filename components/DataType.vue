<script setup>
const props = defineProps([
  `field`,
  `model-value`,
  `autofocus`
])

const emits = defineEmits([
  `update:modelValue`
])

const value = ref(props.modelValue)
const checkbox = ref(true)

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

// Validators

function validateInt(e) {
  if (e === `` || e === undefined || e === null) {
    return true
    
  } else if (!Number.isInteger(parseFloat(e))) {
    return `Value must be an integer`
    
  } else {
    return true
  }
}
</script>

<template>
  <div style="display: flex; gap: 1rem; width: 100%;">
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
        clearable
        :label="props.field.fieldData.name"
        :items="props.field.fieldData.suggestedItems"
        :autofocus="props.autofocus"
      ></v-combobox>

      <!-- Default Types -->
      <v-text-field
        v-else-if="props.field.fieldData.datatype === `string`"
        clearable
        :label="props.field.fieldData.name"
        :autofocus="props.autofocus"
        v-model="value"
      ></v-text-field>

      <v-text-field
        v-if="props.field.fieldData.datatype === `object`"
        clearable
        hint='insert any type, make sure to include "" with strings'
        :label="props.field.fieldData.name"
        :autofocus="props.autofocus"
        v-model="value"
      ></v-text-field>

      <v-text-field
        v-else-if="props.field.fieldData.datatype === `int`"
        clearable
        type="number"
        inputmode="numeric"
        :label="props.field.fieldData.name"
        :autofocus="props.autofocus"
        :rules="[validateInt]"
        v-model="value"
      ></v-text-field>

      <v-text-field
        v-else-if="props.field.fieldData.datatype === `byte[]` || props.field.fieldData.datatype === `float` || props.field.fieldData.datatype === `double` || props.field.fieldData.datatype === `decimal`"
        type="number"
        :label="props.field.fieldData.name"
        :autofocus="props.autofocus"
        clearable
        v-model="value"
      ></v-text-field>

      <v-select
        v-else-if="props.field.fieldData.datatype === `bool`"
        :label="props.field.fieldData.name"
        :items="[`true`, `false`]"
        :autofocus="props.autofocus"
        clearable
        v-model="value"
      ></v-select>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
