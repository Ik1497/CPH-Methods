<script setup>
const props = defineProps([
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const value = reactive([
  {
    datatype: `string`,
    value: [``, ``],
  }
])

function addRow() {
  value.push({
    datatype: `string`,
    value: [``, ``],
  })
}

function removeRow(index) {
  value.splice(index, 1)
}

watch(value, async (newValue, oldValue) => {
  let data = []

  newValue.forEach(item => {
    if (item.value[0] === `` || item.value[1] === ``) return

    data.push([
      item.value[0],
      ConvertDatatype(item.datatype, item.value[1])
    ])
  });

  console.log(CsharpJson(Object.fromEntries(data)))

  emits(`update:modelValue`, {
    type: `object`,
    data: CsharpJson(Object.fromEntries(data))
  })
})
</script>

<template>
  <TransitionGroupSlideFromTop>
    <div
      v-for="(item, itemIndex) in value"
      style="display: grid; grid-template-columns: 1fr 4fr 15fr 15fr; gap: .5rem;"
    >
      <v-btn
        color="error"
        variant="tonal"
        style="height: 3.5rem;"
        :disabled="value.length <= 1"
        @click="removeRow(itemIndex)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <DatatypeSelect v-model="value[itemIndex].datatype" />

      <v-text-field
        label="Name"
        v-model="value[itemIndex].value[0]"
      ></v-text-field>

      <DataType
        :field="{
          fieldData: {
            datatype: value[itemIndex].datatype,
            name: `Value`
          }
        }"
        v-model="value[itemIndex].value[1]"
      ></DataType>
    </div>
  </TransitionGroupSlideFromTop>

  <div style="display: flex; justify-content: flex-end;">
    <v-btn variant="tonal" @click="addRow">Add row</v-btn>
  </div>
</template>

<style scoped lang="scss">

</style>
