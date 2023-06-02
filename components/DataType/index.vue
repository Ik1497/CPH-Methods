<script setup>
const {field, modelValue, autofocus} = defineProps([
  `field`,
  `model-value`,
  `autofocus`,
])

const emits = defineEmits([`update:modelValue`])

const checkbox = ref(true)
const value = ref(field.fieldData.default || ``)

const data = computed(() => {
  return {
    enabled: checkbox.value,
    value: value.value,
  }
})

emits(`update:modelValue`, data)

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, data)
})

watch(checkbox, async (newValue, oldValue) => {
  emits(`update:modelValue`, data)
})

// Validators

function validateInt(e) {
  if (e === `` || e === undefined || e === null) {
    return true
  } else if (!Number.isInteger(Number(e))) {
    return `Value must be an integer`
  } else {
    return true
  }
}
</script>

<template>
  <v-hover close-delay="500">
    <template v-slot:default="{isHovering, props}">
      <div
        v-bind="props"
        :style="{
          position: `relative`,
          display: `flex`,
          gap: `1rem`,
          width: `100%`,
        }">
        <Transition>
          <div
            v-if="isHovering"
            :style="{
              position: `absolute`,
              top: `.5rem`,
              right: `.5rem`,
              color: `#555`,
              fontFamily: `Poppins`,
              fontSize: `0.9rem`,
            }">
            {{ field.fieldData.datatype }}
          </div>
        </Transition>
        <div v-if="field.fieldData.default != undefined">
          <v-checkbox v-model="checkbox">
            <v-tooltip activator="parent" location="top">{{
              checkbox ? `Remove this option` : `Bring this option back`
            }}</v-tooltip>
          </v-checkbox>
        </div>
        <div
          :style="{
            width: `100%`,
            opacity: `${checkbox ? `100%` : `40%`}`,
          }">
          <!-- Special Types -->
          <DataTypeList
            v-if="field.fieldData.datatype.match(/List<([\S\s]*?)>/g)"
            :field="{
              ...field.fieldData,
              datatype: field.fieldData.datatype.replace(
                /List<([\S\s]*?)>/g,
                `$1`
              ),
            }"
            v-model="value" />
          <DataTypeTimeSpan
            v-else-if="field.fieldData.datatype === `TimeSpan`"
            :field="{
              ...field.fieldData,
              datatype: field.fieldData.datatype.replace(
                /List<([\S\s]*?)>/g,
                `$1`
              ),
            }"
            v-model="value" />
          <DataTypeDateTime
            v-else-if="field.fieldData.datatype === `DateTime`"
            :field="{
              ...field.fieldData,
              datatype: field.fieldData.datatype.replace(
                /List<([\S\s]*?)>/g,
                `$1`
              ),
            }"
            v-model="value" />
          <!-- Special Options -->
          <v-combobox
            v-else-if="field.fieldData.suggestedItems != undefined"
            v-model="value"
            clearable
            :label="field.fieldData.name"
            :items="field.fieldData.suggestedItems"
            :autofocus="autofocus"></v-combobox>
          <!-- Default Types -->
          <v-text-field
            v-else-if="field.fieldData.datatype === `string`"
            clearable
            :label="field.fieldData.name"
            :autofocus="autofocus"
            v-model="value"></v-text-field>
          <v-text-field
            v-if="field.fieldData.datatype === `object`"
            clearable
            hint='insert any type, make sure to include "" with strings'
            :label="field.fieldData.name"
            :autofocus="autofocus"
            v-model="value"></v-text-field>
          <v-text-field
            v-else-if="field.fieldData.datatype === `int`"
            clearable
            type="number"
            inputmode="numeric"
            :label="field.fieldData.name"
            :autofocus="autofocus"
            :rules="[validateInt]"
            v-model="value"></v-text-field>
          <v-text-field
            v-else-if="
              field.fieldData.datatype === `byte[]` ||
              field.fieldData.datatype === `float` ||
              field.fieldData.datatype === `double` ||
              field.fieldData.datatype === `decimal`
            "
            type="number"
            :label="field.fieldData.name"
            :autofocus="autofocus"
            clearable
            v-model="value"></v-text-field>
          <v-select
            v-else-if="field.fieldData.datatype === `bool`"
            :label="field.fieldData.name"
            :items="
              field.fieldData.nullable
                ? [`null`, `true`, `false`]
                : [`true`, `false`]
            "
            :autofocus="autofocus"
            clearable
            v-model="value"></v-select>
        </div>
      </div>
    </template>
  </v-hover>
</template>

<style scoped lang="scss"></style>
