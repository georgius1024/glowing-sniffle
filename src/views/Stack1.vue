<template>
  <div id="stack">
    <draggable
      ref="draggable"
      v-model="order"
      class="sortable"
      :options="{ invertSwap: true, animation: 150, direction: 'vertical' }"
    >
      <div class="wrapper" v-for="(row, index) in sortedRows" :key="index">
        <container :cols="row.length">
          <template v-slot:col1>
            <component v-bind="row[0].props" :is="row[0].component" :key="row[0].id" />
          </template>
          <template v-slot:col2 v-if="row.length > 1">
            <component v-bind="row[1].props" :is="row[1].component" :key="row[1].id" />
          </template>
          <template v-slot:col3 v-if="row.length > 2">
            <component v-bind="row[2].props" :is="row[2].component" :key="row[2].id" />
          </template>
        </container>
      </div>
    </draggable>
  </div>
</template>

<script>
import TextBlock from '../components/TextBlock'
import ButtonBlock from '../components/ButtonBlock'
import ImageBlock from '../components/ImageBlock'
import Container from '../components/Container'
import blocks from '../blocks'
import draggable from 'vuedraggable'

export default {
  name: 'Stack',
  components: {
    ButtonBlock,
    TextBlock,
    ImageBlock,
    Container,
    draggable,
  },
  data() {
    return {
      blocks,
      order: [],
    }
  },
  computed: {
    keys() {
      return this.blocks.map((e) => e.id).join(',')
    },
    mappedBlocks() {
      return this.blocks.map((e) => {
        const wrap = ({ id, row, position, ...rest }, component) => ({
          component,
          id,
          row,
          position,
          props: rest,
        })
        switch (e.type) {
          case 'text':
            return wrap(e, TextBlock)
          case 'button':
            return wrap(e, ButtonBlock)
          case 'image':
            return wrap(e, ImageBlock)
        }
      })
    },
    rows() {
      const rows = [...this.mappedBlocks].sort((a, b) => a.row - b.row || a.position - b.position)
      const reducer = (rows, block) => {
        const clone = [...rows]
        clone[block.row] = clone[block.row] || []
        clone[block.row][block.position] = block
        return clone
      }
      return rows.reduce(reducer, [])
    },
    sortedRows() {
      return this.order.map((index) => this.rows[index])
    },
  },
  created() {
    this.order = this.rows.map((_, index) => index)
  },
  methods: {
    inspect(...args) {
      console.log(args)
    },
  },
}
</script>

<style lang="scss">
#stack {
  width: 300px;
  user-select: none;
  cursor: pointer;
  .wrapper > * {
    zoom: 0.25;
  }
}
</style>
