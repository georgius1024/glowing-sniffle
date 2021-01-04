<template>
  <draggable
    group="rows"
    id="sorter"
    :animation="150"
    :value="rows"
    @input="input"
  >
    <SortableRow
      v-for="(row, index) in list"
      :key="index"
      :value="row"
      :sortable="active >= 0"
      :active="active === index"
      @input="updateRow(index, $event)"
      @move-out="moveOut(index, $event)"
      @activate="active = index"
      @deactivate="active = -1"
    />
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import _debounce from 'lodash.debounce'
import SortableRow from './SortableRow'
export default {
  name: 'Sorter',
  components: {
    SortableRow,
    draggable
  },
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      sortableRows: false,
      list: [],
      active: -1,
      lastSortEvent: null
    }
  },
  created() {
    this.postInputEvent = _debounce(() => {
      const order = this.list
        .filter(row => Boolean(row))
        .map((row, rowIndex) => {
          return row
            .filter(col => Boolean(col))
            .map((block, colIndex) => {
              return { ...block, row: rowIndex, column: colIndex }
            })
        })
        .flat()
      this.$emit('sort', order)
    }, 100)
  },
  beforeMount() {
    this.list = this.rows
  },
  watch: {
    rows: function(newValue, oldValue) {
      if (newValue !== oldValue) {
        console.log('updated')
        this.list = this.rows
      }
    }
  },
  methods: {
    emit(rows) {
      this.list = rows
      this.postInputEvent()
    },
    input(rows) {
      this.emit(rows)
    },
    updateRow(index, row) {
      const rows = this.list
        .map((r, i) => (i === index ? row : r))
        .filter(r => r.length)
      this.emit(rows)
    },
    moveOut(index, col) {
      const rows = [...this.list]
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
