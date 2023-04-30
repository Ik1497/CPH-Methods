<script setup>
import Prism from '~/plugins/prism'

const slots = useSlots()

const props = defineProps([
  `language`,
  `clipboard`
])

const code = slots.default()[0].children
const clipboardClicked = ref(false)

function clipboardClick() {
  clipboardClicked.value = true
  
  navigator.clipboard.writeText(props.clipboard)
  
  setTimeout(() => {
    clipboardClicked.value = false
  }, 2000);
}

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <div class="code-wrapper">
    <div class="toolbar">
      <div class="toolbar-content">
        <p>{{ props?.language === undefined ? `csharp` : props?.language }}</p>
        <p>Code Preview</p>
        <v-btn
          v-if="props.clipboard"
          icon
          variant="text"
          density="comfortable"
          @click="clipboardClick"
        ><v-icon>{{ clipboardClicked ? `mdi-check` : `mdi-clipboard-text-outline` }}</v-icon></v-btn>
      </div>
    </div>
    <div class="code">
      <pre><code :class="`language-${props?.language === undefined ? `csharp` : props?.language}`"><slot /></code></pre>
    </div>
  </div>
</template>

<style scoped lang="scss">
:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: transparent;
}

.code-wrapper {
  background: #191919;
  position: relative;

  .toolbar {
    border-bottom: 1px solid #222;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .toolbar-content {
      padding: .25rem;
      padding-inline: .5rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: .75rem;
        font-weight: 700;
      }
    }
  }

  .code {
    padding-top: 2.5rem;

    .token.boolean, .token.number, .token.function {
      color: #9be6ff;
    }
    
    .token.selector, .token.important, .token.atrule, .token.keyword, .token.builtin {
      color: #ff8ae6;
    }
    
    .token.operator, .token.entity, .token.url {
      color: #7f7f7f;
    }
  }
}
</style>
