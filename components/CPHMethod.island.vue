<script setup>
const props = defineProps([
  `title`,
  `description`,
]);
</script>
<template>
  <p>Title: {{ props.title }}</p>
  <p>Description: {{ props.description }}</p>
</template>
