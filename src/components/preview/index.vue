<template>
  <div class="preview-rows">
    <preview-row v-for="(row, index) in rows" :key="index" :value="row" />
  </div>
</template>

<script>
import PreviewRow from './PreviewRow'

export default {
  name: 'Preview',
  components: {
    PreviewRow
  },
  props: {
    rows: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.preview-rows {
  width: 687px;
  user-select: none;
  * {
    cursor: default;
  }
}
</style>
