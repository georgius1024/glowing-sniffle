<template>
  <div class="composer">
    <div class="preview">
      <button class="show-sorter" @click="showSorter = true">Click to sort blocks</button>
      <Preview :rows="rows" deletes @delete="removeBlock" />
      <add-block-toolbar @add="add" />
      <modal v-model="showSorter">
        <template #header>
          Sort blocks
        </template>

        <sorter :rows="rows" @sort="sortBlocks" />

      </modal>
    </div>
    <div class="editor">
      <button @click="undo">undo</button>
      <button @click="redo">redo</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { v4 as uuid } from 'uuid'
import Preview from '../components/preview'
import AddBlockToolbar from '../components/AddBlockToolbar'
import Modal from '../components/Modal'
import Sorter from '../components/sorter'
import { createParagraphs, createPhrase, createWord } from '../utils'
export default {
  name: 'Composer',
  components: {
    Preview,
    AddBlockToolbar,
    Modal,
    Sorter
  },
  data() {
    return {
      showSorter: false
    }
  },
  computed: {
    ...mapGetters(['rows'])
  },
  mounted() {
    this.loadExample()
  },
  methods: {
    ...mapActions(['loadExample']),
    ...mapMutations(['addBlock', 'removeBlock', 'sortBlocks', 'undo', 'redo']),
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
    },
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
    .show-sorter {
      background-color: #ccc;
      border: none;
      outline: none;
      border-radius: 4px;
      padding: 12px;
      margin: 12px 0;
      display: block;
      width: 100%;
    }
  }
  .editor {
    border-left: 1px solid #ccc;
    min-height: 100vh;
    flex-grow: 1;
  }
}
</style>
