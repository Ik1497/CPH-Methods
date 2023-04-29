<script setup lang="ts">
const props = defineProps([
  `title`,
])
</script>
<template>
  <div style="width: 100%; height: 100%; display: flex; color: white; background: coral; justify-content: center; align-items: center;">
    <h1 style="font-size: 70px;">
      {{ title }} 👋
    </h1>
  </div>
</template>