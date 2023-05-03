<script setup>
const props = defineProps([
  `title`
])
</script>

<template>
  <v-sheet rounded="lg" style="padding: 1rem; margin-bottom: 1rem;">
    <div v-if="props.title">
      <p
        :style="{
          fontFamily: `Poppins`,
          fontSize: `.9rem`,
          color: `#aaa`,
        }"
      >{{ props.title }}</p>
      <br>
    </div>
    <slot></slot>
  </v-sheet>
</template>

<style scoped lang="scss">

</style>
