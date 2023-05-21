<script setup>
const passwordVisible = ref(false)

function click() {
  passwordVisible.value = !passwordVisible.value
}
</script>

<template lang="pug">
v-text-field(@click:append="click" :type="passwordVisible ? 'text' : 'password'" :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'")
</template>

<style lang="scss" scoped></style>
