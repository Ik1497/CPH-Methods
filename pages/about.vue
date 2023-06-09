<script setup>
useHead(
  BuildMeta(
    `About Streamer.bot CPH Methods`,
    `Learn more about the Streamer.bot CPH Methods collection`
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

let randomMethod = methods[Math.round(Math.random() * methods.length)]
let randomCategory =
  Object.entries(methodData)[
    Math.round(Math.random() * Object.entries(methodData).length)
  ][1]
</script>

<template>
  <LinksPageHeader
    hide-cards-view
    title="About Streamer.bot CPH Methods"
    description="Learn more about the Streamer.bot CPH Methods collection"
    :method="{icon: `mdi-information-outline`}" />

  <v-list>
    <v-list-item
      title="/all"
      subtitle=" A list of all the CPH Methods"
      to="/all"></v-list-item>

    <v-list-item
      title="/search"
      subtitle="The way you can search for all the CPH Methods"
      to="/search"></v-list-item>

    <v-list-item
      title="/:category"
      subtitle="The page for each category"
      :to="randomCategory.path"></v-list-item>

    <v-list-item
      title="/:category/:method"
      subtitle="The page for each method"
      :to="randomMethod.path"></v-list-item>

    <v-list-item
      title="/embed/:category/:method"
      subtitle="The embed page for each method"
      :to="`/embed${randomMethod.path}`"></v-list-item>

    <v-list-item
      title="/changelogs"
      subtitle="Here you can see on which version methods where added/changed"
      to="/changelogs"></v-list-item>

    <v-list-item
      title="/api/methods"
      subtitle="The JSON API with all the methods"
      to="/api/methods"></v-list-item>
  </v-list>

  <br />

  <h2>:category/:method query reference</h2>
  <h3>view</h3>
  <p>
    Forces a view on the code editor. This is made for the embed but will work
    on the normal one too.
  </p>
  <br />
  <p>Values: <v-code>edit</v-code>/<v-code>preview</v-code></p>
</template>

<style scoped lang="scss"></style>
