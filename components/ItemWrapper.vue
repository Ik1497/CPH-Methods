<script setup>
const props = defineProps([
  `title`
])
</script>

<template>
  <v-sheet rounded="lg" style="padding: 1rem; margin-bottom: 1rem; border-bottom: var(--application-border); border-bottom-left-radius: 0!important; border-bottom-right-radius: 0!important;">
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
