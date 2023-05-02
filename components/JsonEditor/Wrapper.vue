<script setup>
const props = defineProps([
  `model-value`
])

const emits = defineEmits([
  `update:modelValue`
])

const value = ref(`Object`)

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, newValue)
})
</script>

<template>
  <v-sheet rounded="lg" style="padding: 1rem;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <!-- <p style="font-size: 1.5rem;">
        <slot name="title"></slot>
      </p> -->
      <!-- <v-select
        :items="['Object', 'Array', 'Other']"
        density="comfortable"
        style="max-width: 120px"
        v-model="value"
      ></v-select> -->
    </div>

    <slot></slot>
  </v-sheet>
</template>

<style scoped lang="scss">

</style>
