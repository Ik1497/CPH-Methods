<script setup>
let methodData = GetMethods()
let methods = []

Object.entries(methodData).forEach(([categoryName, categoryInformation]) => {
  Object.entries(categoryInformation.methods).forEach(([method, methodInformation]) => {
    methods.push({
      ...methodInformation
    })
  });
});

const search = ref(``)
const searchItems = ref(methods)

function updateSearch(e) {
  setTimeout(() => {
    e = formatSearch(search.value)

    searchItems.value = methods.filter((value) => {
      return formatSearch(value.title).includes(e) ||
        formatSearch(value.categoryName).includes(e) ||
        formatSearch(value.method).includes(e)
    })

    console.log(searchItems.value)
  });
}

function formatSearch(text) {
  return text.toLowerCase().replaceAll(` `, ``)
}
</script>

<template>
  <div style="height: 100%; width: 100%; display: grid; place-items: center;">
    <div style="width: 100%;">
      <v-text-field
        label="Search"
        :hint="`${searchItems.length} ${searchItems.length === 1 ? `Result` : `Results`}`"
        persistent-hint
        v-model="search"
        @keydown="updateSearch()"
      ></v-text-field>

      <br>

      <v-list
        v-if="searchItems.length > 0"
        lines="one"
        style="max-height: 500px;"
      >
        <v-list-item
          v-for="searchItem in searchItems"
          :key="searchItem"
          :title="searchItem.title"
          :subtitle="searchItem.categoryName"
          :to="searchItem.path"
        >

        <template #prepend>
          <MethodAvatar :method="searchItem" />
        </template>
      
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
