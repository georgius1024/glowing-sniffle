<template>
  <div id="preview-row">
    <div
      :class="{
        col: true,
        selected: selection === block.id
      }"
      :style="columnStyle"
      v-for="block in blocksWithComponents"
      :key="block.id"
      @click="$emit('select', block.id)"
    >
      <button class="drag" @click="$emit('sort')" v-if="editable">
        <svg style="width:32px;height:32px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.67,12L18.18,16.5L15.67,14L17.65,12L15.67,10.04L18.18,7.53L22.67,12M12,1.33L16.47,5.82L13.96,8.33L12,6.35L10,8.33L7.5,5.82L12,1.33M12,22.67L7.53,18.18L10.04,15.67L12,17.65L14,15.67L16.5,18.18L12,22.67M1.33,12L5.82,7.5L8.33,10L6.35,12L8.33,13.96L5.82,16.47L1.33,12M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"
          />
        </svg>
      </button>

      <button class="delete" @click="$emit('delete', block.id)" v-if="editable">
        <svg style="width:32px;height:32px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
          />
        </svg>
      </button>
      <component v-bind="block.props" :is="block.component" :key="block.id" />
    </div>
  </div>
</template>
<script>
import TextBlock from '../blocks/TextBlock'
import ButtonBlock from '../blocks/ButtonBlock'
import ImageBlock from '../blocks/ImageBlock'

export default {
  name: 'PreviewRow',
  props: {
    value: {
      type: Array,
      requied: true
    },
    editable: {
      type: Boolean,
      default: false
    },
    selection: {
      type: String,
      requied: false
    }
  },
  computed: {
    blocksWithComponents() {
      const wrap = ({ id, row, column, type, ...rest }, component) => ({
        component,
        id,
        row,
        column,
        type,
        props: rest
      })

      return this.value.map(block => {
        switch (block.type) {
          case 'text':
            return wrap(block, TextBlock)
          case 'button':
            return wrap(block, ButtonBlock)
          case 'image':
            return wrap(block, ImageBlock)
        }
      })
    },
    cols() {
      return this.value.length
    },
    columnStyle() {
      return {
        width: `${(100 / this.cols).toFixed(2)}%`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#preview-row {
  display: flex;
  flex-direction: row;
  .col {
    display: flex;
    position: relative;
    .delete,
    .drag {
      position: absolute;
      width: 36px;
      height: 36px;
      border: 0px none transparent;
      outline: 0px none transparent;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      display: none;
      flex-grow: 0;
      box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.4);
      & * {
        cursor: pointer;
      }
    }
    .delete {
      top: 16px;
      right: 16px;
      color: red;
    }
    .drag {
      top: 16px;
      right: 64px;
      color: #00c6db;
    }
    &.selected {
      outline: 2px dashed #00c6db;
      z-index: 1;
      .delete,
      .drag {
        display: inline;
      }
    }
    & > * {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
