<script setup>
const props = defineProps([
  `title`,
  `description`,
  `method`,
  `model-value`,
  `hide-cards-view`,
])

const emits = defineEmits([`update:modelValue`])

const title = props.title
const description = props.description
const method = props.method

const data = ref({})

watch(data.value, async (newValue, oldValue) => {
  emits(`update:modelValue`, newValue)
})
</script>

<template>
  <div
    :style="{
      display: `flex`,
      gap: `1rem`,
      position: `relative`,
    }">
    <div>
      <MethodAvatar :method="method" style="height: 100%" full-size />
    </div>
    <div>
      <h1 :style="{background: `#0f0f0f`, zIndex: `1`}">{{ title }}</h1>
      <p
        class="text-grey-lighten-1"
        :style="{background: `#0f0f0f`, zIndex: `1`}">
        {{ description }}
      </p>
    </div>
    <div
      v-show="props.hideCardsView === undefined"
      :style="{
        position: `absolute`,
        right: `0`,
        top: `50%`,
        transform: `translateY(-50%)`,
      }">
      <slot name="append-inner">
        <CardsView v-model="data.cardsView" />
      </slot>
    </div>
  </div>

  <v-divider style="margin-block: 0.75rem"></v-divider>
</template>

<style scoped lang="scss"></style>
