<script setup>

</script>

<template>
  <TransitionGroup tag="div" name="slide-from-top" class="container">
    <slot></slot>
  </TransitionGroup>
</template>

<style lang="scss">
.slide-from-top-move,
.slide-from-top-enter-active,
.slide-from-top-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-from-top-enter-from,
.slide-from-top-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(0, 30px);
}

.slide-from-top-leave-active {
  position: absolute;
}
</style>
