<script setup>
const props = defineProps([
  `cards-view`,
  `cards`
])

const style = {
  grid: `display: grid; grid-template-columns: 1fr 1fr; gap: .5rem;`,
  'compact-list': `display: flex; flex-direction: column; gap: .5rem;`
}
</script>

<template>
  <div :style="style[props.cardsView]">
    <Card
      v-for="card in props.cards"
      :cards-view="props.cardsView"
      :title="card.title"
      :subtitle="card.subtitle"
      :description="card.description"
      :tags="card.tags"
      :method="card.method"
      :path="card.path"
    />
  </div>
</template>

<style scoped lang="scss">

</style>
