<template>
  <div
    class="wrapper"
    :class="{ active }"
    @click="activate"
    @mouseleave="mouseLeave"
  >
    <button
      class="move-out"
      :disabled="cols === 1"
      title="Move first block out of group"
      @click="moveOut(0)"
    >
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11.92,19.92L4,12L11.92,4.08L13.33,5.5L7.83,11H22V13H7.83L13.34,18.5L11.92,19.92M4,12V2H2V22H4V12Z"
        />
      </svg>
    </button>
    <draggable
      :group="group"
      fallbackOnBody
      class="row"
      :animation="150"
      :disabled="!isSortable"
      :swapThreshold="0.65"
      :value="value"
      @input="$emit('input', $event)"
    >
      <div
        :class="{ col: true, active: active && selectedColumn === column }"
        :style="columnStyle"
        v-for="(block, column) in value"
        :key="block.id"
        @mousein="selectedColumn = column"
        @mousemove="selectedColumn = column"
        @mouseout="selectedColumn = -1"
      >
        <button class="delete" @click="deleteBlock(column)">
          <svg style="width:32px;height:32px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
            />
          </svg>
        </button>
        <component v-bind="block.props" :is="block.component" :key="block.id" />
      </div>
    </draggable>
    <button
      class="move-in"
      :disabled="cols === 1"
      title="Move next block into group"
      @click="moveOut(cols - 1)"
    >
      <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.08,4.08L20,12L12.08,19.92L10.67,18.5L16.17,13H2V11H16.17L10.67,5.5L12.08,4.08M20,12V22H22V2H20V12Z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'SortableRow',
  components: {
    draggable
  },
  props: {
    value: {
      type: Array,
      requied: true
    },
    sortable: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    },
    zoom: {
      type: Number,
      default: 0.3
    }
  },
  data() {
    return {
      selectedColumn: -1
    }
  },
  computed: {
    cols() {
      return this.value.length
    },
    isSortable() {
      return this.sortable
    },
    columnStyle() {
      return {
        width: `${(100 / this.cols).toFixed(2)}%`
      }
    },
    group() {
      if (this.cols < 3 || this.active) {
        return 'cols'
      }
      return 'none'
    }
  },
  methods: {
    activate() {
      this.$emit('activate')
    },
    deactivate() {
      this.$emit('deactivate')
    },
    mouseEnter() {
      this.timer = setTimeout(() => this.activate(), 1000)
    },
    mouseLeave() {
      this.deactivate()
      clearTimeout(this.timer)
    },
    moveOut(column) {
      this.$emit('move-out', column)
    },
    deleteBlock(column) {
      this.$emit('delete', column)
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  max-width: 343px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  .move-out,
  .move-in {
    min-width: 32px;
    max-width: 32px;
    visibility: hidden;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    &[disabled] {
      color: rgba(0, 0, 0, 0.1);
      cursor: default;
    }
  }
  &.active {
    background-color: #eee;
    .move-out,
    .move-in {
      visibility: visible;
      background-color: inherit;
    }
  }

  .row {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    .col {
      cursor: pointer;
      display: flex;
      padding: 2px;
      position: relative;
      .delete {
        display: none;
        position: absolute;
        width: 36px;
        height: 36px;
        top: 16px;
        right: 16px;
        color: red;
        z-index: 10;
        border: 0px none transparent;
        outline: 0px none transparent;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        box-shadow: none;
      }
      &.active {
        .delete {
          display: inline;
          cursor: pointer;
        }
      }
      & > * {
        box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.4);
        display: flex;
        flex-grow: 1;
        zoom: 0.5;
      }
    }
  }
}
</style>
