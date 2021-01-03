import { actionReducer, rowsReducer } from './utils'
export default {
  blocks({ changes, initialState, position }) {
    return changes.slice(0, position).reduce(actionReducer, initialState)
  },
  rows(_, getters) {
    const rows = [...getters.blocks].sort(
      (a, b) => a.row - b.row || a.column - b.column
    )
    return rows.reduce(rowsReducer, [])
  }
}
