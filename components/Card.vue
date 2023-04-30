<script setup>
const props = defineProps([
  `cards-view`,
  `title`,
  `subtitle`,
  `description`,
  `tags`,
  `method`,
  `path`
])
</script>

<template>
  <v-card v-if="props.cardsView === `grid`" :to="props.path">
    <v-card-title>{{ props.title }}</v-card-title>
    <v-card-subtitle>Reference for all {{ props.title }} CPH Methods</v-card-subtitle>

    <v-card-text>
      <p>{{ props.description }}</p>

      <br>

      <v-chip v-for="tag in props.tags" style="margin-right: .5rem;">{{ tag }}</v-chip>
    </v-card-text>
  </v-card>

  <v-card v-else-if="props.cardsView === `compact-list`" :to="props.path">
    <div style="display: flex; gap: .5rem; padding: .5rem;">
      <div>
        <MethodAvatar :method="props.method" />
      </div>
      <div>
        <v-list-item-title style="padding: 0;">{{ props.title }}</v-list-item-title>
        <v-list-item-subtitle style="padding: 0;">{{ props.description }}</v-list-item-subtitle>
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">

</style>
