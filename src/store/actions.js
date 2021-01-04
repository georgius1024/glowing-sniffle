import example from './example'
export default {
  save({ commit, getters }) {
    localStorage.blocks = JSON.stringify(getters.normalizedBlocks)
    commit('replace', {
      initialState: getters.normalizedBlocks,
      changes: [],
      position: 0
    })

  },
  load({ commit }) {
    commit('replace', {
      initialState: JSON.parse(localStorage.blocks || '[]'),
      changes: [],
      position: 0
    })
  },
  loadExample({ commit }) {
    commit('replace', {
      initialState: example,
      changes: [],
      position: 0
    })
  }
}
