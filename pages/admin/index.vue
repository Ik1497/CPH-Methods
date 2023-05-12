<script setup>
const { data } = await useFetch(`/api/methods`)
console.log(data)
</script>

<template>
{{ data }}
</template>

<style scoped lang="scss">

</style>
