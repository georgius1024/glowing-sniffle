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
        <div class="toolbar">
          <button @click="showSorter = true">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.67,12L18.18,16.5L15.67,14L17.65,12L15.67,10.04L18.18,7.53L22.67,12M12,1.33L16.47,5.82L13.96,8.33L12,6.35L10,8.33L7.5,5.82L12,1.33M12,22.67L7.53,18.18L10.04,15.67L12,17.65L14,15.67L16.5,18.18L12,22.67M1.33,12L5.82,7.5L8.33,10L6.35,12L8.33,13.96L5.82,16.47L1.33,12M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"
              />
            </svg>
            <span>
              Sort blocks
            </span>
          </button>
          <button @click="undo">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z"
              />
            </svg>
            <span>
              Undo
            </span>
          </button>
          <button @click="redo">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z"
              />
            </svg>
            <span>
              Redo
            </span>
          </button>
          <button @click="resetBlocks">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z"
              />
            </svg>
            <span>
              Reset
            </span>
          </button>

          <button>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
              />
            </svg>
            <span>
              Save
            </span>
          </button>
        </div>

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
            <button
              v-if="selectedBlock.type === 'button'"
              @click="toggleButtonText"
            >
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
    this.resetBlocks()
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
    },
    resetBlocks() {
      this.loadExample()
      this.selection = this.blocks.length && this.blocks[0].id
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
    .toolbar {
      flex-grow: 1;
      margin: 6px 0;
      display: flex;
      & > button {
        padding: 6px;
        background-color: #ccc;
        border: 1px solid #333;
        color: #333;
        cursor: pointer;
        display: flex;
        align-items: center;
        svg {
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
