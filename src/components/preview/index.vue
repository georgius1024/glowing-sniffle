<template>
  <div class="preview-rows">
    <preview-row
      v-for="(row, index) in rows"
      :key="index"
      :value="row"
      :deletes="deletes"
      @delete="$emit('delete', $event)"
    />
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
    },
    deletes: {
      type: Boolean,
      default: false
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
