<template>
  <div id="app" :class="{ modal: showSorter }">
    <div class="controls">
      <button @click="sort">Click to sort blocks</button>
    </div>
    <Composition :blocks="blocks" />
    <div class="sorter-outer" v-show="showSorter">
      <div class="sorter-inner">
        <div class="instructions" v-if="showInstructions">
          <button
            class="close"
            @click="showInstructions = false"
            v-show="false"
          >
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
              />
            </svg>
          </button>
          <ul>
            <li>
              You can sort blocks, create rows with up to 3 blocks, delete
              blocks
            </li>
            <li>Drag rows of blocks up and down to sort</li>
            <li>Click on row to micromanage blocks in row</li>
            <li>
              Click on ⇐ and ⇒ buttons to move block out of selected row
            </li>
            <li>
              Click on red trash can symbol to delete block
            </li>
          </ul>
          <center>
            <a href="#" @click.prevent="showInstructions = false">Got it</a>
          </center>
        </div>
        <div v-else>
          <div class="toolbar">
            <button @click="showSorter = false">Save and Close</button>
          </div>
          <Sorter v-model="blocks" @input="$emit('input', $event)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mappedBlocks } from './block-utils'
import blocks from './blocks'
import Composition from './components/composition'
import Sorter from './components/sorter'
export default {
  name: 'App',
  components: {
    Composition,
    Sorter
  },
  data() {
    return {
      showSorter: false,
      showInstructions: true,
      blocks: mappedBlocks(blocks)
    }
  },
  methods: {
    sort() {
      this.showSorter = true
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
  box-sizing: border-box;
}
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  flex-direction: column;
  .controls {
    width: 687px;
    padding: 32px 0;
    display: flex;
    button {
      flex-grow: 1;
      border: none;
      background-color: #ccc;
      padding: 14px;
    }
  }
  &.modal {
    max-height: 100vh;
    overflow-y: hidden;
  }
  .sorter-outer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    .sorter-inner {
      background-color: #fff;
      overflow: hidden;
      padding: 32px 64px;
      max-height: 100vh;
      overflow-y: scroll;
      .toolbar {
        display: flex;
        flex-direction: row;
        padding: 4px;
        button {
          display: block;
          cursor: pointer;
          background-color: #ccc;
          outline: none;
          border: none;
          text-transform: uppercase;
          padding: 4px 12px;
          flex-grow: 1;
        }
      }
    }
    .instructions {
      padding: 16px;
      background-color: #fff;
      .close {
        position: absolute;
        top: 24px;
        right: 36px;
        outline: none;
        border: none;
        padding: 4px;
        color: #ccc;
        background-color: transparent;
        font-size: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
