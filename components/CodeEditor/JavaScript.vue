<script setup>
import {Codemirror} from "vue-codemirror"
import {javascript} from "@codemirror/lang-javascript"
import {oneDark} from "@codemirror/theme-one-dark"

const extensions = [javascript(), oneDark]
const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}

function myCompletions(context) {
  // console.log(`context`, context)
  // console.log(`view`, view)
  // let word = context.matchBefore(/\w*/)
  // if (word.from == word.to && !context.explicit) return null
  // return {
  //   from: word.from,
  //   options: [
  //     {label: "match", type: "keyword"},
  //     {label: "hello", type: "variable", info: "(World)"},
  //     {label: "magic", type: "text", apply: "⠁⭒*.✩.*⭒⠁", detail: "macro"},
  //   ],
  // }
}
</script>

<template lang="pug">
Codemirror(@ready="handleReady" @change="myCompletions($event)" :extensions="extensions")
</template>

<style scoped lang="scss"></style>
