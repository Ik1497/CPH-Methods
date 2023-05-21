<script setup>
useHead(
  BuildMeta(
    `Search`,
    `Search between all CPH methods to easily find the one you're looking for.`
  )
)

let methodData = GetMethods()
let methods = []

Object.entries(methodData).forEach(([categoryName, categoryInformation]) => {
  Object.entries(categoryInformation.methods).forEach(
    ([method, methodInformation]) => {
      methods.push({
        ...methodInformation,
      })
    }
  )
})

const search = ref(``)
const searchItems = ref(methods)

function updateSearch(e) {
  setTimeout(() => {
    e = formatSearch(search.value)

    searchItems.value = methods.filter((value) => {
      return (
        formatSearch(value.title).includes(e) ||
        formatSearch(value.categoryName).includes(e) ||
        formatSearch(value.method).includes(e)
      )
    })
  })
}

function formatSearch(text) {
  return text.toLowerCase().replaceAll(` `, ``)
}
</script>

<template>
  <div
    style="
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    ">
    <h1>Search</h1>
    <p>Press <v-kbd>/</v-kbd></p>
    <br />
    <div style="width: 100%">
      <v-text-field
        persistent-hint
        label="Search"
        autofocus
        :hint="`${searchItems.length} ${
          searchItems.length === 1 ? `Result` : `Results`
        }`"
        v-model="search"
        @keydown="updateSearch()"></v-text-field>

      <br />

      <v-list lines="one" style="height: 500px; position: relative">
        <div
          v-if="searchItems.length <= 0"
          style="
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            display: grid;
            place-items: center;
          ">
          <p style="font-size: 2rem">No Results Found</p>
        </div>

        <TransitionGroup tag="div" name="slide-from-top" class="container">
          <v-list-item
            v-for="searchItem in searchItems"
            :key="searchItem"
            :title="searchItem.title"
            :subtitle="searchItem.categoryName"
            :to="searchItem.path">
            <template #prepend>
              <MethodAvatar :method="searchItem" />
            </template>
          </v-list-item>
        </TransitionGroup>
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
