<script setup>
const { data } = await useFetch(`/api/get-users`)
console.log(data)
</script>

<template>
{{ data }}
</template>

<style scoped lang="scss">

</style>
