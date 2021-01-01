<template>
  <div id="composition">
    <div class="wrapper" v-for="(row, index) in rows" :key="index">
      <container :value="row" :key="index" />
    </div>
  </div>
</template>

<script>
import { blocksToRows } from '../block-utils'
import Container from '../components/Container'

export default {
  name: 'Composition',
  components: {
    Container
  },
  props: {
    blocks: {
      type: Array,
      required: true
    }
  },
  computed: {
    rows() {
      return blocksToRows([...this.blocks])
    }
  }
}
</script>

<style lang="scss">
#composition {
  width: 687px;
  user-select: none;
  cursor: pointer;
}
</style>
