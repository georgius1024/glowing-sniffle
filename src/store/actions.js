import example from './example'
export default {
  save({ getters }) {
    localStorage.blocks = JSON.stringify(getters.blocks)
  },
  load({ state }) {
    state.initialState = JSON.parse(localStorage.blocks || '[]')
    state.changes = []
  },
  loadExample({ state }) {
    state.initialState = example
    state.changes = []
    state.position = 0;
  }
}
