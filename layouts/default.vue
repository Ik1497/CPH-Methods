<script setup>
const route = useRoute()
const router = useRouter()

let prevRoute = ref(``)

handleRoute(route)

watch(route, async (newRoute, oldRoute) => {
  handleRoute(newRoute)
})

function handleRoute(routeEvent) {
  if (routeEvent.path.split(`/`)[1] === `Methods`) {
    prevRoute.value = `/`
  } else if (routeEvent.path.split(`/`).length === 2) {
    prevRoute.value = `/`
  } else {
    prevRoute.value = `/Methods/${routeEvent.path.split(`/`)[1]}`
  }
}

if (process.client) {
  window.addEventListener(`keydown`, e => {
    if (e.target === document.body && e.key === `/`) {
      router.push(`/search`)
    }
  })
}
</script>

<template>
  <v-app>
    <v-app-bar
      color="surface"
      density="comfortable"
      elevation="0"
      :style="{
        borderBottom: `var(--application-border)`
      }"
    >
      <v-btn
        v-if="route.path != `/`"
        icon
        size="small"
        :to="prevRoute"
      ><v-icon>mdi-chevron-left</v-icon></v-btn>

      <div
        :style="{
          fontFamily: `Poppins`,
          fontSize: `1.25rem`,
          paddingLeft: `1rem`,
          fontWeight: `200`,
          display: `flex`,
          alignItems: `center`,
          gap: `.25rem`,
        }"
      >
        <img
          src="https://streamer.bot/logo-transparent.svg"
          alt="favicon"
          :style="{
            height: `2rem`,
          }"
        >
        <p>
          Streamer.bot
          <span
            :style="{
              fontWeight: `500`,
            }"
          >CPH Methods</span>
          <v-chip label variant="tonal" size="x-small" color="primary" class="mb-1 ml-2">Pre Release</v-chip>
        </p>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="route.path != `/search`"
        icon
        to="/search"
        size="small"
      ><v-icon>mdi-magnify</v-icon></v-btn>

      <v-btn
        v-if="route.path != `/about`"
        icon
        to="/about"
        size="small"
      ><v-icon>mdi-information-outline</v-icon></v-btn>
    </v-app-bar>

    <v-main style="margin: 1rem; padding-inline: 1rem; max-width: 1200px; margin-inline: auto; width: 100%;">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">

</style>
