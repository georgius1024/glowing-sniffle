<template>
  <div class="row">
    <div
      class="col"
      :style="columnStyle"
      v-for="block in blocksWithComponents"
      :key="block.id"
    >
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
    & > * {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
