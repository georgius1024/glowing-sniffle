import store from '@/store'
import {
  ACTION_ADD,
  ACTION_REMOVE,
  ACTION_UPDATE,
  ACTION_SORT
} from '@/store/utils'
const randomString = () =>
  Math.random()
    .toString(36)
    .slice(2)

describe('Store', () => {
  it('has all attributes', () => {
    expect(store).toHaveProperty('state')
    expect(store).toHaveProperty('getters')
    expect(store).toHaveProperty('mutations')
    expect(store).toHaveProperty('actions')
  })
  describe('State', () => {
    it('includes initialState', () => {
      expect(store.state).toHaveProperty('initialState')
      expect(store.state.initialState).toHaveLength(0)
    })
    it('includes changes', () => {
      expect(store.state).toHaveProperty('changes')
      expect(store.state.changes).toHaveLength(0)
    })
    it('includes position', () => {
      expect(store.state).toHaveProperty('position')
      expect(store.state.position).toBe(0)
    })
  })

  describe('Mutations', () => {
    beforeEach(() => {
      store.state.changes = []
      store.state.position = []
    })
    describe('addBlock', () => {
      const block = { id: randomString(), type: randomString() }
      beforeEach(() => {
        store.mutations.addBlock(store.state, block)
      })
      it('adds change', () => {
        expect(store.state.changes).toHaveLength(1)
      })
      it('adds ACTION_ADD mutation', () => {
        expect(store.state.changes[0].action).toEqual(ACTION_ADD)
      })
      it('adds block data', () => {
        expect(store.state.changes[0].block).toEqual(block)
      })
      it('sets position', () => {
        expect(store.state.position).toBe(1)
      })
    })
    describe('removeBlock', () => {
      const id = randomString()
      beforeEach(() => {
        store.mutations.removeBlock(store.state, id)
      })
      it('adds change', () => {
        expect(store.state.changes).toHaveLength(1)
      })
      it('adds ACTION_REMOVE mutation', () => {
        expect(store.state.changes[0].action).toEqual(ACTION_REMOVE)
      })
      it('adds id', () => {
        expect(store.state.changes[0].id).toEqual(id)
      })
      it('sets position', () => {
        expect(store.state.position).toBe(1)
      })
    })
    describe('updateBlock', () => {
      const id = randomString()
      const changes = { type: randomString() }
      beforeEach(() => {
        store.mutations.updateBlock(store.state, { id, ...changes })
      })
      it('adds change', () => {
        expect(store.state.changes).toHaveLength(1)
      })
      it('adds ACTION_UPDATE mutation', () => {
        expect(store.state.changes[0].action).toEqual(ACTION_UPDATE)
      })
      it('adds changes data', () => {
        expect(store.state.changes[0].changes).toEqual(changes)
      })
      it('sets position', () => {
        expect(store.state.position).toBe(1)
      })
    })
    describe('sortBlocks', () => {
      const order = randomString()
      beforeEach(() => {
        store.mutations.sortBlocks(store.state, order)
      })
      it('adds change', () => {
        expect(store.state.changes).toHaveLength(1)
      })
      it('adds ACTION_SORT mutation', () => {
        expect(store.state.changes[0].action).toEqual(ACTION_SORT)
      })
      it('adds order', () => {
        expect(store.state.changes[0].order).toEqual(order)
      })
      it('sets position', () => {
        expect(store.state.position).toBe(1)
      })
    })
    describe('undo', () => {
      it('decrements position', () => {
        store.mutations.addBlock(store.state, { id: randomString() })
        store.mutations.undo(store.state)
        expect(store.state.position).toBe(0)
      })
      it('does nothing when position is 0', () => {
        store.mutations.addBlock(store.state, { id: randomString() })
        store.mutations.undo(store.state)
        expect(store.state.position).toBe(0)
        store.mutations.undo(store.state)
        expect(store.state.position).toBe(0)
      })
    })
    describe('redo', () => {
      it('increments position', () => {
        store.mutations.addBlock(store.state, { id: randomString() })
        store.mutations.undo(store.state)
        store.mutations.redo(store.state)
        expect(store.state.position).toBe(1)
      })
      it('does nothing when position is last', () => {
        store.mutations.addBlock(store.state, { id: randomString() })
        store.mutations.undo(store.state)
        store.mutations.redo(store.state)
        expect(store.state.position).toBe(1)
        store.mutations.redo(store.state)
        expect(store.state.position).toBe(1)
      })
    })
  })
  describe('Getters', () => {
    beforeEach(() => {
      store.state.initialState = []
      store.state.changes = []
      store.state.position = []
    })
    describe('Blocks', () => {
      it('is empty initially', () => {
        expect(store.getters.blocks(store.state)).toHaveLength(0)
      })
      it('returns initial state when no changes', () => {
        store.state.initialState = [randomString()]
        expect(store.getters.blocks(store.state)).toEqual(
          store.state.initialState
        )
      })
      it('returns added blocks', () => {
        const block1 = { id: randomString(), type: randomString() }
        const block2 = { id: randomString(), type: randomString() }
        store.mutations.addBlock(store.state, block1)
        store.mutations.addBlock(store.state, block2)
        expect(store.getters.blocks(store.state)).toEqual([block1, block2])
      })
      it('returns added blocks and initial state', () => {
        const initial = { id: randomString(), type: randomString() }
        const added1 = { id: randomString(), type: randomString() }
        const added2 = { id: randomString(), type: randomString() }
        store.state.initialState = [initial]
        store.mutations.addBlock(store.state, added1)
        store.mutations.addBlock(store.state, added2)
        expect(store.getters.blocks(store.state)).toEqual([
          initial,
          added1,
          added2
        ])
      })
      describe('block deletion', () => {
        const initial = { id: randomString(), type: randomString() }
        const added1 = { id: randomString(), type: randomString() }
        const added2 = { id: randomString(), type: randomString() }
        beforeEach(() => {
          store.state.initialState = [initial]
          store.mutations.addBlock(store.state, added1)
          store.mutations.addBlock(store.state, added2)
        })
        it('can delete last added block', () => {
          store.mutations.removeBlock(store.state, added2.id)
          expect(store.getters.blocks(store.state).map(e => e.id)).toEqual(
            [initial, added1].map(e => e.id)
          )
        })
        it('can delete first added block', () => {
          store.mutations.removeBlock(store.state, added1.id)
          expect(store.getters.blocks(store.state)).toEqual([initial, added2])
        })
        it('can delete all added blocks', () => {
          store.mutations.removeBlock(store.state, added1.id)
          store.mutations.removeBlock(store.state, added2.id)
          expect(store.getters.blocks(store.state)).toEqual([initial])
        })
        it('can delete initial state blocks', () => {
          store.mutations.removeBlock(store.state, initial.id)
          expect(store.getters.blocks(store.state)).toEqual([added1, added2])
        })
        it('can delete all added blocks and add them again', () => {
          store.mutations.removeBlock(store.state, added1.id)
          store.mutations.removeBlock(store.state, added2.id)
          store.mutations.addBlock(store.state, added1)
          store.mutations.addBlock(store.state, added2)
          expect(store.getters.blocks(store.state)).toEqual([
            initial,
            added1,
            added2
          ])
        })
      })
      describe('block update', () => {
        const initial = { id: randomString(), type: randomString() }
        const added1 = { id: randomString(), type: randomString() }
        const added2 = { id: randomString(), type: randomString() }
        const attr = randomString()
        beforeEach(() => {
          store.state.initialState = [initial]
          store.mutations.addBlock(store.state, added1)
          store.mutations.addBlock(store.state, added2)
        })
        it('can update first block', () => {
          store.mutations.updateBlock(store.state, { ...added1, attr })
          const blocks = store.getters.blocks(store.state)
          expect(blocks[1]).toHaveProperty('attr', attr)
        })
        it('can update second block', () => {
          store.mutations.updateBlock(store.state, { ...added2, attr })
          const blocks = store.getters.blocks(store.state)
          expect(blocks[2]).toHaveProperty('attr', attr)
        })
        it('can update initial state', () => {
          store.mutations.updateBlock(store.state, { ...initial, attr })
          const blocks = store.getters.blocks(store.state)
          expect(blocks[0]).toHaveProperty('attr', attr)
        })
      })
      describe('sort blocks', () => {
        const initial = {
          id: randomString(),
          row: randomString(),
          column: randomString()
        }
        const added1 = {
          id: randomString(),
          row: randomString(),
          column: randomString()
        }
        const added2 = {
          id: randomString(),
          row: randomString(),
          column: randomString()
        }
        const order = [
          {
            id: initial.id,
            row: 0,
            column: 0
          },
          {
            id: added1.id,
            row: 1,
            column: 0
          },
          {
            id: added2.id,
            row: 1,
            column: 1
          }
        ]
        it('can sort blocks', () => {
          store.state.initialState = [initial]
          store.mutations.addBlock(store.state, added1)
          store.mutations.addBlock(store.state, added2)
          store.mutations.sortBlocks(store.state, order)
          const blocks = store.getters.blocks(store.state)
          expect(blocks[0]).toHaveProperty('row', 0)
          expect(blocks[0]).toHaveProperty('column', 0)
          expect(blocks[1]).toHaveProperty('row', 1)
          expect(blocks[1]).toHaveProperty('column', 0)
          expect(blocks[2]).toHaveProperty('row', 1)
          expect(blocks[2]).toHaveProperty('column', 1)
        })
      })
      describe('undo&redo', () => {
        const initial = { id: randomString(), type: randomString() }
        const added1 = { id: randomString(), type: randomString() }
        const added2 = { id: randomString(), type: randomString() }
        beforeEach(() => {
          store.state.initialState = [initial]
          store.mutations.addBlock(store.state, added1)
          store.mutations.addBlock(store.state, added2)
        })
        it('undo last operation', () => {
          store.mutations.undo(store.state)
          expect(store.getters.blocks(store.state)).toEqual([initial, added1])
        })
        it('undo 2 last operations', () => {
          store.mutations.undo(store.state)
          store.mutations.undo(store.state)
          expect(store.getters.blocks(store.state)).toEqual([initial])
        })
        it('can not undo 3 last operations', () => {
          store.mutations.undo(store.state)
          store.mutations.undo(store.state)
          store.mutations.undo(store.state)
          expect(store.getters.blocks(store.state)).toEqual([initial])
        })
        it('redo 1 undone operation', () => {
          store.mutations.undo(store.state)
          store.mutations.undo(store.state)
          store.mutations.redo(store.state)
          expect(store.getters.blocks(store.state)).toEqual([initial, added1])
        })
        it('redo 2 undone operations', () => {
          store.mutations.undo(store.state)
          store.mutations.undo(store.state)
          store.mutations.redo(store.state)
          store.mutations.redo(store.state)
          expect(store.getters.blocks(store.state)).toEqual([
            initial,
            added1,
            added2
          ])
        })
      })
    })
    describe('Rows', () => {
      const b1 = {
        id: 'b1'
      }
      const b2 = {
        id: 'b2'
      }
      const b3 = {
        id: 'b3'
      }
      it('can sort blocks 1x1 & 2x1 ', () => {
        const order = [
          {
            id: b1.id,
            row: 0,
            column: 0
          },
          {
            id: b2.id,
            row: 1,
            column: 0
          },
          {
            id: b3.id,
            row: 1,
            column: 1
          }
        ]
        store.state.initialState = [b1, b2, b3]
        store.mutations.sortBlocks(store.state, order)
        const blocks = store.getters.blocks(store.state)
        const rows = store.getters.rows(null, { blocks })
        expect(rows).toEqual([
          [{ id: 'b1', row: 0, column: 0 }],
          [
            { id: 'b2', row: 1, column: 0 },
            { id: 'b3', row: 1, column: 1 }
          ]
        ])
      })
      it('can sort blocks 1x1 & 1x1 & 1x1 ', () => {
        const order = [
          {
            id: b1.id,
            row: 0,
            column: 0
          },
          {
            id: b2.id,
            row: 1,
            column: 0
          },
          {
            id: b3.id,
            row: 2,
            column: 0
          }
        ]
        store.state.initialState = [b1, b2, b3]
        store.mutations.sortBlocks(store.state, order)
        const blocks = store.getters.blocks(store.state)
        const rows = store.getters.rows(null, { blocks })
        expect(rows).toEqual([
          [{ id: 'b1', row: 0, column: 0 }],
          [{ id: 'b2', row: 1, column: 0 }],
          [{ id: 'b3', row: 2, column: 0 }]
        ])
      })
      it('can sort blocks 3x1 ', () => {
        const order = [
          {
            id: b1.id,
            row: 0,
            column: 0
          },
          {
            id: b2.id,
            row: 0,
            column: 1
          },
          {
            id: b3.id,
            row: 0,
            column: 2
          }
        ]
        store.state.initialState = [b1, b2, b3]
        store.mutations.sortBlocks(store.state, order)
        const blocks = store.getters.blocks(store.state)
        const rows = store.getters.rows(null, { blocks })
        expect(rows).toEqual([
          [
            { id: 'b1', row: 0, column: 0 },
            { id: 'b2', row: 0, column: 1 },
            { id: 'b3', row: 0, column: 2 }
          ]
        ])
      })
    })
  })

  describe('Actions', () => {
    beforeEach(() => {
      global.localStorage = {}
    })
    describe('Save', () => {
      it('save state to localStorage', () => {
        const b1 = {
          id: 'b1'
        }
        const b2 = {
          id: 'b2'
        }
        const b3 = {
          id: 'b3'
        }
        store.state.changes = []
        store.state.position = []
        store.state.initialState = [b1, b2, b3]
        const blocks = store.getters.blocks(store.state)
        store.actions.save({ getters: { blocks } })
        expect(localStorage).toHaveProperty('blocks')
        expect(localStorage.blocks).toBe(
          JSON.stringify(store.state.initialState)
        )
      })
    })
    describe('Load', () => {
      it('load state from localStorage', () => {
        const b1 = {
          id: 'b1'
        }
        const b2 = {
          id: 'b2'
        }
        const b3 = {
          id: 'b3'
        }
        localStorage.blocks = JSON.stringify([b1, b2, b3])
        store.actions.load(store)
        expect(store.state.initialState).toEqual([b1, b2, b3])
        expect(store.state.changes).toHaveLength(0)
        expect(store.state.position).toBe(0)
      })
    })
  })
})
