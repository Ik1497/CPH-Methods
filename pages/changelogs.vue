<script setup>
import Prism from '~/plugins/prism';

const route = useRoute()
const router = useRouter()

console.log(route, router)

useHead(BuildMeta(
  `Changelogs`,
  `See all the changes and new methods for each Streamer.bot version`
))

let methodData = GetMethods()
let newMethods = []
let versions = []
let methodsFormatted = ``

console.log(route.hash != `` ? route.hash.replace(`#`, ``) : ``)

const version = ref(route.hash != `` ? route.hash.replace(`#`, ``) : ``)
const methods = ref([])
const methodsHtml = ref(``)
const methodsChanged = ref([])
const methodsChangedHtml = ref(``)

Object.entries(methodData).forEach(([methodCategoryId, methodCategoryData]) => {
  Object.entries(methodCategoryData.methods).forEach(([methodItemName, methodItemData]) => {
    newMethods.push(methodItemData)
  });
});

newMethods.forEach(method => {
  if (method.version != undefined && !versions.includes(method.version)) {
    versions.push(method.version)
  }
  
  if (method.versionChanges != undefined) {
    Object.keys(method.versionChanges).forEach(version => {
      if (!versions.includes(version)) versions.push(version)
    });
  }
});

versions.sort((a, b) => {
  a = {major: parseInt(a.split(`.`)[0]), minor: parseInt(a.split(`.`)[1]), patch: parseInt(a.split(`.`)[2])}
  b = {major: parseInt(b.split(`.`)[0]), minor: parseInt(b.split(`.`)[1]), patch: parseInt(b.split(`.`)[2])}

  if (a.major < b.major) return 1
  if (a.major === b.major && a.minor < b.minor) return 1
  if (a.major === b.major && a.minor === b.minor && a.patch < b.patch) return 1
  
  if (a.major > b.major) return -1
  if (a.major === b.major && a.minor > b.minor) return -1
  if (a.major === b.major && a.minor === b.minor && a.patch > b.patch) return -1

  return 0
})

versions = versions.map(item => {
  return {
    title: `v${item}`,
    value: item
  }
})

onMounted(() => {
  Prism.highlightAll()
})

watch(version, async (newVersion, oldVersion) => {
  router.replace({ path: `/changelogs`, hash: `#${version.value}` })
  update()
})

if (version.value === ``) {
  version.value = versions[0].value
} else {
  update()
}

function update() {
  methods.value = []
  methodsChanged.value = []

  newMethods.forEach(method => {
    if (method.version === version.value) {
      methods.value.push(method.formatted.CSharp)
    }

    if (method.versionChanges != undefined) {
      Object.entries(method.versionChanges).forEach(([versionChangeVersion, versionChangeData]) => {
        if (versionChangeVersion === version.value) {
          methodsChanged.value.push(`// ${versionChangeData.change}\n${method.formatted.CSharp}`)
        }
      });
    }
  });

  methodsHtml.value = convertToCode(methods.value.join(`\n`))
  methodsChangedHtml.value = methodsChanged.value.map(item => {
    return convertToCode(item)
  })
}

function convertToCode(code) {
  if (process.client) {
    return Prism.highlight(code, Prism.languages.csharp, `csharp`)
  } else {
    return code
  }
}
</script>

<template>
  <LinksPageHeader
    :key="version"
    :title="`Changelogs v${version}`"
    description="See all the changes and new methods for each Streamer.bot version"
    :method="{icon: `mdi-fire`}"
  >
    <template #append-inner>
      <v-select
        hide-details
        :items="versions"
        v-model="version"
        label="Version"
        variant="outlined"
        item-title="title"
        item-value="value"
        :style="{width: `fit-content`}"
      ></v-select>
    </template>
  </LinksPageHeader>

  <template v-if="methodsHtml != ``">
    <h2 :style="{background: `#2d422d`}">New Methods</h2>
    <pre><code v-html="methodsHtml" class="language-csharp"></code></pre>

    <br>
  </template>

  <template v-if="methodsChangedHtml != ``">
    <h2 :style="{background: `#3f2f20`}">Methods Changed</h2>
    <pre v-for="method in methodsChangedHtml"><code v-html="method" class="language-csharp"></code></pre>
  </template>
</template>

<style scoped lang="scss">

</style>
