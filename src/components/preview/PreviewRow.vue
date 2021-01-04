<template>
  <div class="row">
    <div
      :class="{ col: true, active: selectedColumn === column }"
      :style="columnStyle"
      v-for="(block, column) in blocksWithComponents"
      :key="block.id"
      @mousein="selectedColumn = column"
      @mousemove="selectedColumn = column"
      @mouseout="selectedColumn = -1"
    >
      <button class="delete" @click="$emit('delete', block.id)" v-if="deletes">
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
    deletes: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedColumn: -1
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
.row {
  display: flex;
  flex-direction: row;
  .col {
    display: flex;
    position: relative;
    .delete {
      position: absolute;
      width: 36px;
      height: 36px;
      top: 16px;
      right: 16px;
      color: red;
      border: 0px none transparent;
      outline: 0px none transparent;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      box-shadow: none;
      display: none;
      flex-grow: 0;
      box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.4);
      & * {
        cursor: pointer;
      }
    }
    &.active {
      .delete {
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
