let changes = []
let current = 0
const ACTION_ADD = 'add'
const ACTION_REMOVE = 'remove'
const ACTION_UPDATE = 'update'

function getState() {
  let state = []
  for(let i = 0; i < current; i++) {
    switch(changes[i].action) {
      case ACTION_ADD:
        state = [...state, changes[i].payload]
        break
      case ACTION_REMOVE:
        state = state.filter(e => e.id !== changes[i].payload)
        break
      case ACTION_UPDATE:
        const {id, updated} = changes[i].payload
        state = state.map(e => {
          if (e.id === id) {
            return {...e, updated}
          } else {
            return e
          }
        })
        break
      }
  }
  return state
}

function mutation(action, payload) {
  changes = [...changes, {
    action, 
    payload
  }]
  current = changes.length
  return changes[changes.length - 1]
}

function reset() {
  changes = []
  current = 0
}

function getChanges() {
  return changes
}

function getCurrent() {
  return current
}


reset()

module.exports = {
  ACTION_ADD, 
  ACTION_REMOVE,
  ACTION_UPDATE,
  getChanges,
  getCurrent,
  getState,
  mutation,
  reset
}