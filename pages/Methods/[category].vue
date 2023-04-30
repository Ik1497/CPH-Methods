<script setup>
const route = useRoute()

definePageMeta({
  validate: (route) => {
    return GetMethodsFromCategory(route?.params?.category) != undefined
  }
})

useSeoMeta({
  title: 'CPH Methods',
  description: 'See a list of all Streamer.bot CPH Methods',
})

const methods = GetMethodsFromCategory(route?.params?.category)

console.log(route)
</script>

<template>
  <h1>{{ methods.title }}</h1>
  <p class="text-grey-lighten-1">{{ methods.description }}</p>

  <v-divider style="margin-block: .75rem;"></v-divider>

  <CardGrid>
    <v-card v-for="method in Object.entries(methods.methods)" :to="`/${route?.params?.category}/${method[0]}`">
      <v-card-title>{{ method[1].title }}</v-card-title>
      <v-card-subtitle>Reference for the {{ method[1].title }} CPH Method</v-card-subtitle>

      <v-card-text>
        <p>{{ method[1].description }}</p>

        <br>

        <v-chip v-for="tag in method[1].tags" style="margin-right: .5rem;">{{ tag }}</v-chip>
      </v-card-text>
    </v-card>
  </CardGrid>
</template>

<style scoped lang="scss">

</style>
