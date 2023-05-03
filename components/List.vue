<script setup>
const props = defineProps([
  `field`,
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const value = reactive([
  ``
])

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, convertArrayToList())
})

function convertArrayToList() {
  let items = []

  value.forEach(item => {
    item = ConvertDatatype(props.field.datatype, item)

    items.push(item)
  });

  return `new List<${props.field.datatype}>() { ${items.join(`, `)} }`
}

function addItem() {
  value.push(``)
}

function removeItem(index) {
  value = value.splice(index, 1)
}
</script>

<template>
  <ItemWrapper
    :title="props.field.name"
  >
    <div
      v-for="(item, itemIndex) in value"
      :style="{
        display: `flex`,
        gap: `.5rem`,
      }"
    >
      <v-btn
        color="error"
        variant="tonal"
        style="height: 3.5rem;"
        :disabled="value.length <= 1"
        @click="removeItem(itemIndex)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <DataType
        :field="{
          fieldData: {
            datatype: props.field.datatype,
            name: `${props.field.itemName} ${itemIndex + 1}`
          }
        }"
        
        v-model="value[itemIndex]"
      ></DataType>
    </div>
    <div
      :style="{
        display: `flex`,
        justifyContent: `flex-end`,
      }"
    >
      <v-btn
        variant="tonal"
        @click="addItem"
      >Add item</v-btn>
    </div>
  </ItemWrapper>
</template>

<style scoped lang="scss">

</style>
