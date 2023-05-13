<script setup>
const props = defineProps([
  `cards-view`,
  `cards`
])

const cards = ref([])

const style = {
  grid: {
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gap: `.5rem`,
  },
  'compact-list': {
    display: `flex`,
    flexDirection: `column`,
    gap: `.5rem`,
  }
}

const search = ref(``)

if (process.client) {
  handleSearch(search.value)
}

watch(search, async (newValue, oldValue) => {
  handleSearch(newValue)
})

handleSearch(``)

function handleSearch(searchTerm) {
  if (process.client) {
    if (searchTerm === null) searchTerm = ``
  
    searchTerm = searchText(searchTerm)
  
    cards.value = []
  
    props.cards.forEach(card => {
      if (
        searchText(card.title).includes(searchTerm) ||
        searchText(card.description).includes(searchTerm) ||
        searchText(card.subtitle).includes(searchTerm)
      ) {
        cards.value.push({
          ...card
        })
      }
    });
  }
}

function searchText(text) {
  return text
    .toLowerCase()
    .replaceAll(` `, ``)
}
</script>

<template>
  <v-text-field
    persistent-hint
    clearable
    label="Search"
    placeholder="Search..."
    :hint="`${cards.length} ${cards.length === 1 ? `Result` : `Results`}`"
    v-model="search"
  ></v-text-field>

  <br>

  <div>
    <TransitionGroupSlideFromTop :style="{
      ...style[props.cardsView],
    }">
      <Card
        v-for="card in cards"
        :cards-view="props.cardsView"
        :title="card.title"
        :subtitle="card.subtitle"
        :description="card.description"
        :tags="card.tags"
        :method="card.method"
        :path="card.path"
      />
    </TransitionGroupSlideFromTop>
  </div>
</template>

<style scoped lang="scss">

</style>
