<script setup>
const route = useRoute()

let prevRoute = ref(``)

if (route.path.split(`/`)[1] === `Methods`) {
  prevRoute.value = `/`
} else {
  prevRoute.value = `/Methods/${route.path.split(`/`)[1]}`
}

watch(route, async (newRoute, oldRoute) => {
  if (newRoute.path.split(`/`)[1] === `Methods`) {
    prevRoute.value = `/`
  } else {
    prevRoute.value = `/Methods/${newRoute.path.split(`/`)[1]}`
  }
})
</script>

<template>
  <v-app>
    <v-toolbar color="primary">
      <v-btn v-if="route.path != `/`" icon :to="prevRoute"><v-icon>mdi-chevron-left</v-icon></v-btn>
      <v-toolbar-title>Streamer.bot CPH Methods</v-toolbar-title>
    </v-toolbar>

    <v-main style="margin: 1rem; padding-inline: 1rem; max-width: 1200px; margin-inline: auto; width: 100%;">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">

</style>
