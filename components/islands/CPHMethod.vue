<script setup>
const { method } = defineProps([
  `method`
])

</script>

<template>
  <div :style="{
    color: `#fff`,
    background: `#181818`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    gap: `20px`,
  }">
    <div>
      <img
        src="https://streamer.bot/logo.png"
        alt="Streamer.bot Logo"
        :style="{
          width: `104px`,
        }"
      >
    </div>
    <div>
      <v-icon>{{ method.icon }}</v-icon>
      <p :style="{
        fontSize: `48px`,
        fontWeight: `700`,
        height: `28px`
      }">{{ method.title }}</p>
      <p :style="{
        fontSize: `32px`,
        fontWeight: `400`,
      }">{{ method.description }}</p>
    </div>
  </div>
</template>
