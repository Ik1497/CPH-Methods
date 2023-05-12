<script setup>
const props = defineProps([
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const activeItem = ref(process.client ? localStorage.getItem(`StreambotCPHMethods__cardsView`) || `grid` : `grid`)

onMounted(() => {
  if (process.client) {
    emits(`update:modelValue`, localStorage.getItem(`StreambotCPHMethods__cardsView`) || `grid`)
  } else {
    emits(`update:modelValue`, `grid`)
  }
})
  
const items = [
  {
    title: `Grid View`,
    value: `grid`,
    icon: `mdi-view-grid` 
  },
  {
    title: `Compact List View`,
    value: `compact-list`,
    icon: `mdi-view-list`,
  },
]

watch(activeItem, async (newValue, oldValue) => {
  if (process.client) localStorage.setItem(`StreambotCPHMethods__cardsView`, newValue)
  emits(`update:modelValue`, newValue)
})
</script>

<template>
  <v-select
    data-items-view-select
    label="Cards view"
    :items="items"
    item-value="value"
    variant="outlined"
    v-model="activeItem"
    style="max-width: fit-content; max-height: fit-content;"
  >
    <template #prepend-inner="{ props, item }">
      {{ item?.raw?.icon }}
    </template>
    <template #item="{ props, item }">
      <v-list-item
        v-bind="props"
        :prepend-icon="item?.raw?.icon"
        :title="item?.raw?.title"
      ></v-list-item>
    </template>
  </v-select>
</template>

<style lang="scss">
.v-select[data-items-view-select] .v-input__details {
  display: none;
}
</style>
