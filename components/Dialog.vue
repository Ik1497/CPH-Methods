<script setup>
const {title, buttonTitle} = defineProps([`title`, `buttonTitle`])
</script>

<template lang="pug">
v-dialog(transition="dialog-bottom-transition" width="500px")
  template(#activator="{ props }")
    v-btn(color="primary" v-bind="props") {{ buttonTitle || title }}
  template(#default="{ isActive }")
    v-card
      v-toolbar(color="primary" :title="title")
      v-card-text
        slot
      v-card-actions.justify-end
        slot(name="actions")
        v-btn(variant="text" @click="isActive.value = false") Close
</template>

<style lang="scss" scoped></style>
