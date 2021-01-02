<template>
  <draggable
    group="rows"
    id="sorter"
    :animation="150"
    :value="rows"
    @input="input"
  >
    <SortableRow
      v-for="(row, index) in rows"
      :key="index"
      :value="row"
      :sortable="active >= 0"
      :active="active === index"
      @input="updateRow(index, $event)"
      @move-out="moveOut(index, $event)"
      @delete="deleteBlock(index, $event)"
      @activate="active = index"
      @deactivate="active = -1"
    />
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import SortableRow from './SortableRow'
import { blocksToRows, rowsToBlocks } from '../../block-utils'

export default {
  name: 'Sorter',
  components: {
    SortableRow,
    draggable
  },
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      sortableRows: false,
      rows: [],
      active: -1
    }
  },
  beforeMount() {
    this.updateRows()
  },
  beforeUpdate() {
    this.updateRows()
    console.log('----')
  },
  methods: {
    updateRows() {
      this.rows = blocksToRows(this.value)
    },
    emit(rows) {
      this.rows = rows
      this.$emit('input', rowsToBlocks(rows))
    },
    input(rows) {
      this.emit(rows)
    },
    updateRow(index, row) {
      const rows = this.rows
        .map((r, i) => (i === index ? row : r))
        .filter(r => r.length)
      this.emit(rows)
    },
    moveOut(index, col) {
      const rows = [...this.rows]
      const block = rows[index][col]
      rows[index].splice(col, 1)
      if (col === 0) {
        this.active = index
        rows.splice(index, 0, [block])
      } else {
        rows.splice(index + 1, 0, [block])
        this.active = index + 1
      }
      this.emit(rows)
    },
    deleteBlock(index, col) {
      const rows = [...this.rows]
      rows[index].splice(col, 1)
      this.emit(rows.filter(r => r.length))
    }
  }
}
</script>

<style lang="scss">
#sorter {
  display: flex;
  flex-direction: column;
}
</style>
