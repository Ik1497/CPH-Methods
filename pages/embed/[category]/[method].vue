<script setup>
const route = useRoute()

definePageMeta({
  layout: false,
  validate: (route) => {
    return (
      GetMethod(route?.params?.category, route?.params?.method) != undefined
    )
  },
})

const method = GetMethod(route?.params?.category, route?.params?.method)
console.log(method)

useSeoMeta({
  title: `${method.categoryName} - ${method.title}`,
  description: `${method.categoryName} CPH Methods reference`,
})
</script>

<template>
  <div
    :style="{
      width: `100%`,
      height: `100vh`,
      background: `#191919`,
    }">
    <CPHCodeEditor
      :method="method"
      :style="{
        width: `100vw`,
      }"></CPHCodeEditor>
  </div>
</template>

<style lang="scss" scoped>
html {
  overflow: hidden !important;
  height: fit-content !important;
}
</style>
