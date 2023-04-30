<script setup>
const props = defineProps([
  `method`,
  `full-size`
])

let style = ``

if (props.fullSize != undefined) {
  style = `height: 100%; width: 100%; max-height: 100%; max-width: 100%; font-size: 2.5rem;`
}
</script>

<template style="height: 100%;">
  <v-avatar v-if="props?.method?.image != undefined" rounded="0">
    <v-img :src="props?.method?.image" style="max-height: 75%; max-width: 75%;" :style="style" />
  </v-avatar>

  <v-avatar v-else-if="props?.method?.icon != undefined" rounded="0">
    <v-icon style="max-height: 75%; max-width: 75%;" :style="style">
      {{ props?.method?.icon }}
    </v-icon>
  </v-avatar>

  <v-avatar v-else-if="props?.method?.initials != undefined" :style="style" color="info" style="height: 4.5rem; width: 4.5rem; max-height: 4.5rem; max-width: 4.5rem;">
    {{ props?.method?.initials }}
  </v-avatar>

  <v-avatar v-else :style="style" color="info" style="height: 4.5rem; width: 4.5rem; max-height: 4.5rem; max-width: 4.5rem;">
    {{ props?.method.category.toUpperCase().split(``)[0] + props?.method.category.toUpperCase().split(``)[1] }}
  </v-avatar>
</template>

<style scoped lang="scss">

</style>
