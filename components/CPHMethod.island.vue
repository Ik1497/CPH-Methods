<script setup>
const { title, description } = defineProps([
  `title`,
  `description`,
]);
</script>

<template>
  <p>Title: {{ title }}</p>
  <p>Description: {{ description }}</p>
</template>
