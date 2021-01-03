import { ACTION_ADD, ACTION_REMOVE, ACTION_UPDATE, ACTION_SORT } from './utils'

export default {
  addBlock(state, block) {
    state.changes = [
      ...state.changes.slice(0, state.position),
      {
        action: ACTION_ADD,
        block
      }
    ]
    state.position = state.changes.length
  },
  removeBlock(state, id) {
    state.changes = [
      ...state.changes.slice(0, state.position),
      {
        action: ACTION_REMOVE,
        id
      }
    ]
    state.position = state.changes.length
  },
  updateBlock(state, block) {
    const { id, ...changes } = block
    state.changes = [
      ...state.changes.slice(0, state.position),
      {
        action: ACTION_UPDATE,
        id,
        changes
      }
    ]
    state.position = state.changes.length
  },
  sortBlocks(state, order) {
    state.changes = [
      ...state.changes.slice(0, state.position),
      {
        action: ACTION_SORT,
        order
      }
    ]
    state.position = state.changes.length
  },
  undo(state) {
    if (state.position > 0) {
      state.position--
    }
  },
  redo(state) {
    if (state.position < state.changes.length) {
      state.position++
    }
  },
  replace(state, changes) {
    for (let field in changes) {
      state[field] = changes[field]
    }
  }
}
