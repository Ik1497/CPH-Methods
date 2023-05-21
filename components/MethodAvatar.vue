<script setup>
const props = defineProps([`method`, `full-size`])

let style = {}

if (props.fullSize != undefined) {
  style = {
    height: `100%`,
    width: `100%`,
    maxHeight: `100%`,
    maxWidth: `100%`,
    fontSize: `2.5rem`,
  }
}
</script>

<template style="height: 100%">
  <v-avatar v-if="props?.method?.image != undefined" rounded="0">
    <v-img
      :src="props?.method?.image"
      :style="{maxHeight: `75%`, maxWidth: `75%`, ...style}" />
  </v-avatar>

  <v-avatar v-else-if="props?.method?.icon != undefined" rounded="0">
    <v-icon :style="{maxHeight: `75%`, maxWidth: `75%`, ...style}">
      {{ props?.method?.icon }}
    </v-icon>
  </v-avatar>

  <v-avatar
    v-else-if="props?.method?.initials != undefined"
    color="info"
    :style="{
      height: `4.5rem`,
      width: `4.5rem`,
      maxHeight: `4.5rem`,
      maxWidth: `4.5rem`,
      ...style,
    }">
    {{ props?.method?.initials }}
  </v-avatar>

  <v-avatar
    v-else
    color="info"
    :style="{
      height: `4.5rem`,
      width: `4.5rem`,
      maxHeight: `4.5rem`,
      maxWidth: `4.5rem`,
      ...style,
    }">
    {{
      props?.method.category.toUpperCase().split(``)[0] +
      props?.method.category.toUpperCase().split(``)[1]
    }}
  </v-avatar>
</template>

<style scoped lang="scss"></style>
