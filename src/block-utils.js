import TextBlock from './components/TextBlock'
import ButtonBlock from './components/ButtonBlock'
import ImageBlock from './components/ImageBlock'

export function mappedBlocks(blocks) {
  const wrap = ({ id, row, position, type, ...rest }, component) => ({
    component,
    id,
    row,
    position,
    type,
    props: rest
  })

  return blocks.map(e => {
    switch (e.type) {
      case 'text':
        return wrap(e, TextBlock)
      case 'button':
        return wrap(e, ButtonBlock)
      case 'image':
        return wrap(e, ImageBlock)
    }
  })
}

export function blocksToRows(blocks) {
  const rows = [...blocks].sort(
    (a, b) => a.row - b.row || a.position - b.position
  )
  const reducer = (rows, block) => {
    const clone = [...rows]
    clone[block.row] = clone[block.row] || []
    clone[block.row][block.position] = block
    return clone
  }
  return rows.reduce(reducer, [])
}

export function rowsToBlocks(rows) {
  const blocks = []
  rows.forEach((row, rowIndex) => {
    row.forEach((block, colIndex) => {
      blocks.push({ ...block, row: rowIndex, position: colIndex })
    })
  })
  blocks.sort((a, b) => a.row - b.row || a.position - b.position)
  return blocks
}
