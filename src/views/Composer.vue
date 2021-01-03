<template>
  <div class="composer">
    <div class="preview">
      <add-block-toolbar @add="add" />
      <Preview :rows="rows" />
    </div>
    <div class="editor"></div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { v4 as uuid } from 'uuid'
import Preview from '../components/preview'
import AddBlockToolbar from '../components/AddBlockToolbar'
import { createParagraphs, createPhrase, createWord } from '../utils'

export default {
  name: 'Composer',
  components: {
    Preview,
    AddBlockToolbar
  },
  computed: {
    ...mapGetters(['rows'])
  },
  mounted() {
    this.loadExample()
  },
  methods: {
    ...mapActions(['loadExample']),
    ...mapMutations(['addBlock']),
    add(type) {
      const block = { id: uuid(), type }
      switch (type) {
        case 'text':
          block.header = createPhrase()
          block.text = createParagraphs(2)
          block.color = '#777777'
          block.background = '#ffe6ff'
          block.row = this.rows.length
          block.column = 0
          break
        case 'button':
          block.text = createWord()
          block.url = '#'
          block.button = '#000'
          block.color = '#777777'
          block.background = '#ffe6ff'
          block.row = this.rows.length
          block.column = 0
          break
        case 'image':
          block.alt = createPhrase()
          block.src = `images/img${Math.ceil(Math.random() * 3)}.jpg`
          block.url = '#'
          block.button = '#000'
          block.color = '#777777'
          block.background = '#ffe6ff'
          block.row = this.rows.length
          block.column = 0
          break
      }
      this.addBlock(block)
    }
  }
}
</script>
<style lang="scss" scoped>
.composer {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
  .preview {
    margin: 20px;
  }
  .editor {
    border-left: 1px solid #ccc;
    min-height: 100vh;
    flex-grow: 1;
  }
}
</style>
