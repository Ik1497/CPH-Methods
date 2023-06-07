<script setup>
import Prism from "~/plugins/prism"

const route = useRoute()
console.log(route)

const {method} = defineProps([`method`])

const clipboardClicked = ref(false)
const editMode = ref(
  process.client
    ? localStorage.getItem(`StreambotCPHMethods__editMode`) === `true`
      ? true
      : false
    : false
)
const editData = ref([])
const editContent = ref(``)
const editHtml = ref(``)
const returnType = ref({
  fieldData: {
    datatype: `string`,
    name: `Type`,
    suggestedItems: [...GetTypes(), ...Object.keys(GetClasses())],
  },
  value: `T`,
})

if (route.query.view === `edit`) editMode.value = true
if (route.query.view === `preview`) editMode.value = false

// Main

method.fields.forEach((field, fieldIndex) => {
  editData.value[fieldIndex] = {
    fieldData: {...field},
    value: {
      value: `T`,
      enabled: true,
    },
  }
})

editContent.value = convertDataToCPH()
editHtml.value = convertToCode(convertDataToCPH())

watch(editData.value, async () => update())
watch(returnType.value, async () => update())

function update() {
  editContent.value = convertDataToCPH()
  editHtml.value = convertToCode(convertDataToCPH())

  Prism.highlightAll()
}

// Helper

function convertMethodToCPHTemplate() {
  return method.formatted.CSharp
}

function convertDataToCPH() {
  if (method.type === `property`) return `CPH.${method.method};`

  let fields = []

  let indexStopped = editData.value.length
  let indexDontCancel = true

  Array.from([...editData.value].reverse()).forEach(
    (editfield, editFieldIndex) => {
      if (
        editfield.fieldData.default != undefined &&
        editfield.value.enabled === false &&
        indexDontCancel
      ) {
        indexStopped--
      } else {
        indexDontCancel = false
      }
    }
  )

  editData.value.forEach((editField, editFieldIndex) => {
    if (editFieldIndex >= indexStopped) return

    fields.push(
      ConvertDatatype(
        editField.fieldData.datatype,
        editField.value.value === `` ? `null` : editField.value.value
      )
    )
  })

  return `CPH.${method.method}${
    method.return === `T` ? `<${returnType.value.value.value}>` : ``
  }(${fields.join(`, `)});`
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
  }, 2000)
}

function toggleEditMode() {
  editMode.value = !editMode.value

  if (process.client)
    localStorage.setItem(`StreambotCPHMethods__editMode`, `${editMode.value}`)
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
            v-if="route.query.view === undefined"
            icon
            variant="text"
            density="comfortable"
            @click="toggleEditMode">
            <v-icon>{{ editMode ? `mdi-eye` : `mdi-pencil` }}</v-icon>
            <v-tooltip activator="parent" location="top">{{
              editMode ? `Change to preview mode` : `Change to edit mode`
            }}</v-tooltip>
          </v-btn>

          <v-btn
            icon
            variant="text"
            density="comfortable"
            @click="clipboardClick">
            <v-icon>{{
              clipboardClicked ? `mdi-check` : `mdi-clipboard-text-outline`
            }}</v-icon>
            <v-tooltip activator="parent" location="top"
              >Copy to clipboard</v-tooltip
            >
          </v-btn>

          <v-btn
            v-if="!route.path.startsWith(`/embed/`)"
            icon
            variant="text"
            density="comfortable"
            :to="`/embed${method.path}`"
            target="_blank">
            <v-icon>mdi-open-in-new</v-icon>
            <v-tooltip activator="parent" location="top">Open embed</v-tooltip>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="code" v-show="editMode === false">
      <pre
        class="language-csharp"><code class="language-csharp">{{ convertMethodToCPHTemplate() }}</code></pre>

      <CPHCodeEditorAlertBox :method="method" end />

      <div v-if="method.classes.length > 0" class="return-class">
        <pre
          v-for="methodClass in method.classes"
          :key="methodClass"
          class="language-csharp"><code class="language-csharp" v-html="methodClass?.formatted?.CSharp"></code></pre>
      </div>
    </div>
    <div class="code edit-mode" v-show="editMode === true">
      <pre
        class="language-csharp"><code class="language-csharp" v-html="editHtml"></code></pre>

      <CPHCodeEditorAlertBox :method="method" />

      <div :class="`code-fields ${editData.length > 0 ? `has-fields` : ``}`">
        <DataType
          v-if="method.return === `T`"
          :field="returnType"
          v-model="returnType.value"
          default="T" />

        <template v-if="editData.length > 0">
          <div
            v-for="(editField, editFieldIndex) in editData"
            :key="editFieldIndex"
            style="padding-bottom: 0.5rem">
            <DataType
              :field="editField"
              v-model="editData[editFieldIndex].value" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:not(pre) > code[class*="language-"],
pre[class*="language-"] {
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
      padding: 0.25rem;
      padding-inline: 0.5rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.75rem;
        font-weight: 700;
      }
    }
  }

  .code {
    padding-top: 2.5rem;

    .code-fields.has-fields {
      padding-top: 1.5rem;
      padding-inline: 1rem;
      border-top: $border;
    }

    .return-class {
      border-top: $border;
    }
  }
}
</style>
