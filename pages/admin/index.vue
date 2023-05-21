<script setup>
useHead(BuildMeta(`CPH Methods Admin`, `Manage the CPH Methods`))

const methodsData = GetMethods()
let methods = []

Object.entries(methodsData).forEach((methodData) => {
  let data = {
    ...methodData[1],
    subtitle: `Reference for all ${methodData[1].title} CPH Methods Admin`,
    method: methodData[1],
    path: `/admin/${methodData[0]}`,
  }

  console.log(methodData[1])

  methods.push(data)
})
</script>

<template lang="pug">
LinksPageHeader(hide-cards-view title="CPH Methods Admin" description="Manage the CPH Methods" :method="{icon: `mdi-security`}")

CardGrid(:key="client" cards-view="compact-list" :cards="methods")
</template>

<style scoped lang="scss"></style>
