<script setup>
const route = useRoute()

const text = ref(``)

definePageMeta({
  validate: (route) => {
    return GetMethodsFromCategory(route?.params?.file) != undefined
  },
})

const {data, pending, error, refresh} = await useFetch(`/api/file-data`)

text.value = data.value[`${route?.params?.file}.js`]
console.log(data.value)

watch(pending, async (newState) => {
  console.log(newState)
  if (newState === false) text.value = data.value[`${route?.params?.file}.js`]
  console.log(text.value)
})
</script>

<template lang="pug">
prism(lang="js" :model-value="text")
</template>

<style scoped lang="scss"></style>
