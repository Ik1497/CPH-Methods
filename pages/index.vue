<script setup>
useSeoMeta({
  title: 'CPH Methods',
  description: 'See a list of all Streamer.bot CPH Methods',
})

const methods = GetMethods()
console.log(methods)
</script>

<template>
  <v-alert type="warning" variant="tonal">
    WIP: Not all methods are available, and some types may not work as expected.
  </v-alert>

  <br>

  <CardGrid>
    <v-card v-for="category in Object.entries(methods)" :to="category[1].path">
      <v-card-title>{{ category[1].title }}</v-card-title>
      <v-card-subtitle>Reference for all {{ category[1].title }} CPH Methods</v-card-subtitle>

      <v-card-text>
        <p>{{ category[1].description }}</p>

        <br>

        <v-chip v-for="tag in category[1].tags" style="margin-right: .5rem;">{{ tag }}</v-chip>
      </v-card-text>
    </v-card>
  </CardGrid>
</template>

<style scoped lang="scss">

</style>
