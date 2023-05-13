<script setup>
import Prism from '~/plugins/prism'

const { method } = defineProps([
  `method`
])

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
  if (method.type === `property`) return `${method.return} ${method.method};`

  let fields = []

  method.fields.forEach(field => {
    fields.push(`${field.datatype}${field.nullable === true ? `?` : ``} ${field.name}${field?.default != undefined ? ` = ${ConvertDatatype(field.datatype, field.default)}` : ``}`)
  });

  return `${method.return} ${method.method}(${fields.join(`, `)});`
}

function convertDataToCPH() {
  if (method.type === `property`) return `CPH.${method.method};`

  let fields = []

  let indexStopped = editData.value.length
  let indexDontCancel = true

  Array.from(([...editData.value]).reverse()).forEach((editfield, editFieldIndex) => {
    if (editfield.fieldData.default != undefined && editfield.value === `` && indexDontCancel) {
      indexStopped--
    } else {
      indexDontCancel = false
    }
  });

  editData.value.forEach((editField, editFieldIndex) => {
    if (editFieldIndex >= indexStopped) return

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
  if (process.client) {
    return Prism.highlight(code, Prism.languages.csharp, `csharp`)
  } else {
    return code
  }
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
          >
            <v-icon>{{ editMode ? `mdi-eye` : `mdi-pencil` }}</v-icon>
            <v-tooltip
              activator="parent"
              location="top"
            >{{ editMode ? `Change to preview mode` : `Change to edit mode` }}</v-tooltip>
          </v-btn>
          <v-btn
            icon
            variant="text"
            density="comfortable"
            @click="clipboardClick"
          >
            <v-icon>{{ clipboardClicked ? `mdi-check` : `mdi-clipboard-text-outline` }}</v-icon>
            <v-tooltip
              activator="parent"
              location="top"
            >Copy to clipboard</v-tooltip>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="code" v-show="editMode === false">
      <pre class="language-csharp"><code class="language-csharp">{{ convertMethodToCPHTemplate() }}</code></pre>

      <CPHCodeEditorAlertBox :method="method" end />
    </div>
    <div class="code edit-mode" v-show="editMode === true">
      <pre class="language-csharp"><code class="language-csharp" v-html="editHtml"></code></pre>

      <CPHCodeEditorAlertBox :method="method" />

      <div class="code-fields">
        <div v-if="editData.length > 0" v-for="(editField, editFieldIndex) in editData" style="padding-inline: 1rem; padding-bottom: .5rem;">
          <DataType :field="editField" v-model="editData[editFieldIndex].value" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:not(pre) > code[class*="language-"], pre[class*="language-"] {
  background: transparent;
}

.code-wrapper {
  $border: 1px solid #222;

  background: #191919;
  position: relative;

  .toolbar {
    border-bottom: $border;

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
    
    .code-fields {
      padding-top: 1.5rem;
      border-top: $border;
    }
  }
}
</style>
