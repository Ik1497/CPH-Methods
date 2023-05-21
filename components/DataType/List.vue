<script setup>
const props = defineProps([`field`, `model-value`])

const emits = defineEmits([`update:modelValue`])

let value = reactive([
  {
    value: ``,
    enabled: true,
  },
])

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, convertArrayToList())
})

function convertArrayToList() {
  let items = []

  value.forEach((item) => {
    item = ConvertDatatype(props.field.datatype, item.value.value)

    items.push(item)
  })

  return `new List<${props.field.datatype}>() { ${items.join(`, `)} }`
}

function addItem() {
  value.push({
    value: ``,
    enabled: true,
  })
}

function removeItem(index) {
  index = parseInt(index)
  value.splice(index, 1)
}

function arrayToObject(array) {
  let arrayData = Object.entries(array)
  let returnData = []

  arrayData.forEach(([itemIndex, item]) => {
    returnData.push([item, parseInt(itemIndex)])
  })

  return returnData
}

function keydown(e) {
  switch (e.key) {
    case `Enter`:
      addItem()
      break
  }
}
</script>

<template>
  <ItemWrapper :title="props.field.name">
    <TransitionGroupSlideFromTop>
      <div
        v-for="[item, itemIndex] in arrayToObject(value)"
        :key="item + itemIndex"
        :style="{
          display: `flex`,
          gap: `.5rem`,
          width: `100%`,
        }">
        <v-btn
          color="error"
          variant="tonal"
          style="height: 3.5rem"
          :disabled="value.length <= 1"
          @click="removeItem(`${itemIndex}`)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>

        <DataType
          :autofocus="
            `${itemIndex}` === `${value.length - 1}` && value.length != 1
          "
          v-model="value[itemIndex]"
          :field="{
            fieldData: {
              datatype: props.field.datatype,
              name: `${props.field.itemName} ${itemIndex + 1}`,
            },
          }"></DataType>
      </div>
    </TransitionGroupSlideFromTop>
    <div
      :style="{
        display: `flex`,
        justifyContent: `flex-end`,
      }">
      <v-btn variant="tonal" @click="addItem">Add item</v-btn>
    </div>
  </ItemWrapper>
</template>

<style scoped lang="scss"></style>
