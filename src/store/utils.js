export const ACTION_ADD = 'add'
export const ACTION_REMOVE = 'remove'
export const ACTION_UPDATE = 'update'
export const ACTION_SORT = 'sort'
/// interface Change {
///   action: enum{ACTION_ADD, ACTION_REMOVE, ACTION_UPDATE, ACTION_SORT}
///   id?: string
///   block?: Block
///   changes?: Partial<Block>
///   order?: [{id, row, column}]
/// }
export function actionReducer(blocks, change) {
  switch (change.action) {
    case ACTION_ADD:
      return [...blocks, change.block].map(block => ({ ...block }))
    case ACTION_REMOVE: {
      const cleared = blocks.filter(e => e.id !== change.id)
      const rows = cleared
        .sort((a, b) => a.row - b.row || a.column - b.column)
        .reduce(rowsReducer, [])
      return rows
        .filter(row => Boolean(row))
        .map((row, rowIndex) => {
          return row
            .filter(col => Boolean(col))
            .map((block, colIndex) => {
              return { ...block, row: rowIndex, column: colIndex }
            })
        })
        .flat()
    }
    case ACTION_UPDATE:
      return blocks.map(block => {
        if (block.id === change.id) {
          return { ...block, ...change.changes }
        } else {
          return { ...block }
        }
      })
    case ACTION_SORT:
      return blocks.map(block => {
        const order = change.order.find(e => e.id === block.id)
        if (order) {
          return { ...block, ...order }
        } else {
          return { ...block }
        }
      })
    default:
      throw new Error('unknown action')
  }
}

export function rowsReducer(rows, block) {
  const clone = [...rows]
  clone[block.row] = clone[block.row] || []
  clone[block.row][block.column] = { ...block }
  return clone
}
