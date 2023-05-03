<script setup>
import Prism from '~/plugins/prism'

const props = defineProps([
  `method`
])

const method = props.method

const clipboardClicked = ref(false)
const editMode = ref(process.client ? localStorage.getItem(`StreambotCPHMethods__editMode`) === `true` ? true : false : false)
const editData = ref([])
const editContent = ref(``)
const editHtml = ref(``)

// Main

method.fields.forEach((field, fieldIndex) => {
  editData.value[fieldIndex] = {
    fieldData: {...field},
    value: field.default != undefined ? field.default : ``,
  }
});

editContent.value = convertDataToCPH()
editHtml.value = convertToCode(convertDataToCPH())

watch(editData.value, async (newValue, oldValue) => {
  editContent.value = convertDataToCPH()
  editHtml.value = convertToCode(convertDataToCPH())

  Prism.highlightAll()
})

// Helper

function convertMethodToCPHTemplate() {
  let fields = []

  method.fields.forEach(field => {
    fields.push(`${field.datatype} ${field.name}${field?.default != undefined ? ` = ${ConvertDatatype(field.datatype, field.default)}` : ``}`)
  });

  return `${method.return} ${method.method}(${fields.join(`, `)});`
}

function convertDataToCPH() {
  let fields = []

  editData.value.forEach(editField => {
    if (editField.fieldData.default != undefined && editField.value === ``) return
    fields.push(ConvertDatatype(editField.fieldData.datatype, editField.value === `` ? `null` : editField.value))
  });

  return `CPH.${method.method}(${fields.join(`, `)});`
}

function clipboardClick() {
  clipboardClicked.value = true
  
  if (editMode.value) {
    navigator.clipboard.writeText(editContent.value)
  } else {
    navigator.clipboard.writeText(convertMethodToCPHTemplate())
  }
  
  setTimeout(() => {
    clipboardClicked.value = false
  }, 2000);
}

function toggleEditMode() {
  editMode.value = !editMode.value

  if (process.client) localStorage.setItem(`StreambotCPHMethods__editMode`, `${editMode.value}`)
}

function convertToCode(code) {
  return Prism.highlight(code, Prism.languages.csharp, `csharp`)
}

// Default

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <div class="code-wrapper">
    <div class="toolbar">
      <div class="toolbar-content">
        <p>csharp</p>
        <p>{{ editMode ? `Code Editor` : `Code Preview` }}</p>
        <div>
          <v-btn
            icon
            variant="text"
            density="comfortable"
            @click="toggleEditMode"
          ><v-icon>{{ editMode ? `mdi-eye` : `mdi-pencil` }}</v-icon></v-btn>
          <v-btn
            icon
            variant="text"
            density="comfortable"
            @click="clipboardClick"
          ><v-icon>{{ clipboardClicked ? `mdi-check` : `mdi-clipboard-text-outline` }}</v-icon></v-btn>
        </div>
      </div>
    </div>
    <div class="code" v-show="editMode === false">
      <pre class="language-csharp"><code class="language-csharp">{{ convertMethodToCPHTemplate() }}</code></pre>
    </div>
    <div class="code edit-mode" v-show="editMode === true" style="padding-bottom: .5rem;">
      <pre class="language-csharp"><code class="language-csharp" v-html="editHtml"></code></pre>

      <div v-for="(editField, editFieldIndex) in editData" style="padding-inline: 1rem;">
        <DataType :field="editField" v-model="editData[editFieldIndex].value" />
      </div>
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
  }
}
</style>
