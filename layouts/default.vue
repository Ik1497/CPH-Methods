<script setup>
const route = useRoute()
const router = useRouter()

let prevRoute = ref(``)

if (route.path.split(`/`)[1] === `Methods`) {
  prevRoute.value = `/`
} else if (route.value = `/search`) {
  prevRoute.value = `/`
} else {
  prevRoute.value = `/Methods/${route.path.split(`/`)[1]}`
}

watch(route, async (newRoute, oldRoute) => {
  if (newRoute.path.split(`/`)[1] === `Methods`) {
    prevRoute.value = `/`
  } else if (newRoute.value = `/search`) {
    prevRoute.value = `/`
  } else {
    prevRoute.value = `/Methods/${newRoute.path.split(`/`)[1]}`
  }
})

if (process.client) {
  window.addEventListener(`keydown`, e => {
    if (e.key === `/`) {
      router.push(`/search`)
    }
  })
}
</script>

<template>
  <v-app>
    <v-toolbar color="primary">
      <v-btn v-if="route.path != `/`" icon :to="prevRoute"><v-icon>mdi-chevron-left</v-icon></v-btn>
      <v-toolbar-title>Streamer.bot CPH Methods</v-toolbar-title>

      <v-btn
        v-if="route.path != `/search`"
        icon
        to="/search"
      ><v-icon>mdi-magnify</v-icon></v-btn>
    </v-toolbar>

    <v-main style="margin: 1rem; padding-inline: 1rem; max-width: 1200px; margin-inline: auto; width: 100%;">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">

</style>
