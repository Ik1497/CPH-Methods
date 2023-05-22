<!-- <script setup>
// import {Codemirror} from "vue-codemirror"
import {javascript} from "@codemirror/lang-javascript"
import {oneDark} from "@codemirror/theme-one-dark"

const extensions = [javascript(), oneDark]
const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}

function getCodemirrorStates() {
  const state = view.value.state
  const ranges = state.selection.ranges
  const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
  const cursor = ranges[0].anchor
  const length = state.doc.length
  const lines = state.doc.lines

  return {
    state,
    ranges,
    selected,
    cursor,
    length,
    lines,
  }
}

function insertAtPosition(text) {
  const codemirrorStates = getCodemirrorStates()

  view.value.dispatch({
    changes: {
      from: codemirrorStates.ranges[0].from,
      to: codemirrorStates.ranges[0].to,
      insert: text,
    },
  })
}

const buttons = [
  {
    name: `Basic template`,
    icon: `mdi-text-short`,
    click: buttonBasicTemplate(),
  },
  {
    name: `Expanded template`,
    icon: `mdi-text-long`,
  },
]

function buttonBasicTemplate() {
  console.log(`text`)
  //   insertAtPosition(`METHODNAME: {
  //   title: \`METHOD TITLE\`,
  //   description: \`METHOD DESCRIPTION\`,
  //   tags: [\`METHOD TAG\`],
  //   return: \`void\`,
  //   fields: [
  //     {
  //       datatype: \`string\`,
  //       name: \`FIELD NAME\`,
  //     },
  //   ]
  // },`)
}
</script> -->

<script setup>
import {Codemirror} from "vue-codemirror"
import {javascript} from "@codemirror/lang-javascript"
import {oneDark} from "@codemirror/theme-one-dark"

console.log(Codemirror)

const extensions = [javascript(), oneDark]
const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}

function myCompletions(context) {
  console.log(`context`, context)
  console.log(`view`, view)
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
//- div(:style="{height: `100%`, display: `grid`, gridTemplateRows: `auto 1fr`}" class="rounded-lg")
//-   div(:style="{background: `rgb(var(--v-theme-surface))`}")
//-     v-btn(v-for="button in buttons" rounded="0" @click="button.click")
//-       v-icon {{ button.icon }}
//-       v-tooltip(activator="parent" location="bottom") {{ button.name }}
//-     Codemirror(v-bind="props" placeholder="Type in your code..." :style="{height: '100%'}" :autofocus="true" :indent-with-tab="true" :tab-size="2" :extensions="extensions" @ready="handleReady" @change="log('change', $event)" @focus="focus" @blur="log('blur', $event)")
</template>

<style scoped lang="scss"></style>
