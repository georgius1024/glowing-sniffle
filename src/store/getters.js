import { actionReducer, rowsReducer } from './utils'
export default {
  blocks({ changes, initialState, position }) {
    return changes.slice(0, position).reduce(actionReducer, initialState)
  },
  rows(_, getters) {
    const rows = [...getters.blocks].sort(
      (a, b) => a.row - b.row || a.column - b.column
    )
    return rows.reduce(rowsReducer, []).filter(row => Boolean(row))
  },
  normalizedBlocks(_, getters) {
    return getters.rows
      .filter(row => Boolean(row))
      .map((row, rowIndex) => {
        return row
          .filter(col => Boolean(col))
          .map((block, colIndex) => {
            return { ...block, row: rowIndex, column: colIndex }
          })
      })
      .flat()
  },
  canUndo({ position }) {
    return position > 0
  },
  canRedo({ changes, position }) {
    return position < changes.length
  },
  hasUnsavedChanges({ changes }) {
    return changes.length
  }
}
