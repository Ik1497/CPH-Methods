<script setup>
const props = defineProps([
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const types = GetTypes()

const value = ref(``)
const text = ref(``)
const datatype = ref(`string`)

watch(value, async (newValue, oldValue) => {
  text.value = ConvertDatatype(datatype.value, newValue)

  update()
})

watch(datatype, async (newValue, oldValue) => {
  update()

  value.value = ``
  text.value = ``
})

function update() {
  emits(`update:modelValue`, {
    type: datatype.value,
    value: text.value
  })
}
</script>

<template>
  <div style="display: grid; grid-template-columns: 1fr 5fr; gap: .5rem;">
    <v-select
      label="Datatype"
      :items="types"
      v-model="datatype"
    ></v-select>
  
    <DataType
      v-model="value"
      :field="{fieldData: {name: `Value`, datatype: datatype}}"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
