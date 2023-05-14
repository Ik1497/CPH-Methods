const codeReplacements = {
  opening: {
    hr: `<hr class="v-divider v-theme--dark" aria-orientation="horizontal" role="separator" style="margin-block: 0.75rem;">`,
    code: `<div class="v-code">`,
    kbd: `<div class="v-kbd">`,
  },
  closing: {
    code: `</div>`,
    kbd: `</div>`,
  }
}

export default {
  type: `output`,
  filter: function (text) {
    text = text
      .replaceAll(`<hr>`, codeReplacements.opening.hr)
      .replaceAll(`<hr/>`, codeReplacements.opening.hr)
      .replaceAll(`<hr />`, codeReplacements.opening.hr)
      .replaceAll(`<code>`, codeReplacements.opening.code)
      .replaceAll(`</code>`, codeReplacements.closing.code)
      .replaceAll(`<kbd>`, codeReplacements.opening.kbd)
      .replaceAll(`</kbd>`, codeReplacements.closing.kbd)
      .replace(
        /<blockquote>([\S\s]*?)<p class="([\S\s]*?)">([\S\s]*?)<\/p>([\S\s]*?)<\/blockquote>/gm, 
        `<v-alert text="$3" type="$2" variant="tonal"></v-alert>`
      )
    
    //////////
    // TABS //
    //////////

    text = text.replace(/<tabs>([\S\s]*?)<\/tabs>/g, (match, groupTab) => {
      groupTab = groupTab
        .replaceAll(`<p>`, ``)
        .replaceAll(`</p>`, ``)

      const tab = groupTab.trim()
      const id = uuidv4()
      let tabContent = ``
      let windowContent = ``
    
      tab.replace(/<tab name="([\S\s]*?)">([\S\s]*?)<\/tab>/g, (match, groupTabName, groupTabContent) => {
        tabContent += `<v-tab value="${groupTabName.trim()}">${groupTabName.trim()}</v-tab>
        `
        windowContent += `<v-window-item value="${groupTabName.trim()}"><template #default>${groupTabContent.trim()}</template></v-window-item>
        `
      });

      let newText = `<v-card>
      <v-tabs v-model="tabs[\`${id}\`]" bg-color="primary">
        ${tabContent.trim()}
      </v-tabs>
      
      <v-card-text>
      <v-window v-model="tabs[\`${id}\`]">
        ${windowContent.trim()}
      </v-window>
      </v-card-text>
      </v-card>`
    
      return newText
    });

    /////////////////
    // Import Code //
    /////////////////

    text = text.replace(/<import-code>([\S\s]*?)<\/import-code>/g, (match, importCode) => {
      importCode = importCode
        .replaceAll(`<p>`, ``)
        .replaceAll(`</p>`, ``)
        .trim()

      let newText = `<v-sheet rounded="lg" :style="{padding: '1rem', marginBottom: '1rem', background: '#303030'}">
        <template #default>
          <div :style="{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}">
            <div :style="{fontFamily: 'Poppins', fontWeight: '400', fontSize: '1.1rem'}">Import Code</div>
            <div :style="{display: 'flex', gap: '.5rem'}">
              <v-btn @click="copy(\`${importCode}\`)">Copy</v-btn>
              <v-btn @click="download(\`${importCode}\`)">Download</v-btn>
            </div>
          </div>
          <br>
          <div :style="{overflowX: 'auto', background: '#181818', padding: '1rem', borderRadius: '.5rem .5rem 0 0', color: '#aac8e4', whiteSpace: 'pre'}">${importCode}</div>
        </template>
      </v-sheet>`
  
      return newText
    });

    return text
  }
};