<template>
  <div class="composer">
    <div class="preview">
      <Preview
        :rows="rows"
        :selection="selection"
        editable
        @select="selection = $event"
        @delete="removeBlock"
        @sort="showSorter = true"
      />
      <add-block-toolbar @add="add" />
      <modal v-model="showSorter">
        <template #header>
          Sort blocks
        </template>

        <sorter :rows="rows" @sort="sortBlocks" />
      </modal>
    </div>
    <div class="editor">
      <div class="sticky">
        <button @click="undo">undo</button>
        <button @click="redo">redo</button>
        <template v-if="selectedBlock">
          <h3>Edit selected block</h3>
          <div>
            <button @click="toggleBackgroundColor">Change color scheme</button>
            <button v-if="selectedBlock.type === 'image'" @click="toggleImage">
              Change image
            </button>
            <button v-if="selectedBlock.type === 'text'" @click="toggleHeader">
              Change header
            </button>
            <button v-if="selectedBlock.type === 'text'" @click="toggleText">
              Change text
            </button>
            <button v-if="selectedBlock.type === 'button'" @click="toggleButtonText">
              Change text
            </button>
          </div>
        </template>
      </div>
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
      showSorter: false,
      selection: ''
    }
  },
  computed: {
    ...mapGetters(['rows', 'blocks']),
    selectedBlock() {
      return this.blocks.find(e => e.id === this.selection)
    }
  },
  mounted() {
    this.loadExample()
    this.selection = this.blocks.length && this.blocks[0].id
  },
  methods: {
    ...mapActions(['loadExample']),
    ...mapMutations([
      'addBlock',
      'removeBlock',
      'updateBlock',
      'sortBlocks',
      'undo',
      'redo'
    ]),
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
    toggleBackgroundColor() {
      if (this.selectedBlock) {
        if (this.selectedBlock.background === '#194d19') {
          this.updateBlock({
            id: this.selectedBlock.id,
            background: '#ffe6ff',
            color: '#777777',
            button: '#000000'
          })
        } else {
          this.updateBlock({
            id: this.selectedBlock.id,
            color: '#777777',
            button: '#cccccc',
            background: '#194d19'
          })
        }
      }
    },
    toggleImage() {
      if (this.selectedBlock) {
        const matches = /(\d+)/g.exec(this.selectedBlock.src)
        const imgNo = parseInt(matches[0]) || 1
        this.updateBlock({
          id: this.selectedBlock.id,
          src: `images/img${imgNo < 3 ? imgNo + 1 : 1}.jpg`
        })
      }
    },
    toggleHeader() {
      if (this.selectedBlock) {
        this.updateBlock({
          id: this.selectedBlock.id,
          header: createPhrase()
        })
      }
    },
    toggleText() {
      if (this.selectedBlock) {
        this.updateBlock({
          id: this.selectedBlock.id,
          text: createParagraphs(2)
        })
      }
    },
    toggleButtonText() {
      if (this.selectedBlock) {
        this.updateBlock({
          id: this.selectedBlock.id,
          text: createWord()
        })
      }
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
    .sticky {
      position: sticky;
      top: 20px;
    }
  }
}
</style>
