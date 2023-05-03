<script setup>
const props = defineProps([
  `model-value`,
  `type`
])

const emits = defineEmits([
  `update:modelValue`
])

const value = ref({
  data: ``,
  type: ``
})

const type = ref(`Object`)

watch(props.type, async (newValue, oldValue) => {
  value.value.data = ``
})

watch(value, async (newValue, oldValue) => {
  emits(`update:modelValue`, newValue)
})
</script>

<template>
  {{ value }}
  <ItemWrapper v-model="type">
    <JsonEditorArray v-if="type === `Array`" v-model="value" />
    <JsonEditorObject v-else-if="type === `Object`" v-model="value" />
    <JsonEditorDefault v-else-if="type === `Other`" v-model="value" />

    <template #child>
      test
    </template>
  </ItemWrapper>
</template>

<style scoped lang="scss">

</style>
