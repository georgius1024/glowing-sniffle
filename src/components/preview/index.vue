<template>
  <transition-group tag="section" id="preview-rows" name="list">
    <preview-row
      v-for="(row, index) in rows"
      :key="index"
      :value="row"
      :editable="editable"
      :selection="selection"
      @delete="$emit('delete', $event)"
      @select="$emit('select', $event)"
      @sort="$emit('sort')"
    />
  </transition-group>
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
    editable: {
      type: Boolean,
      default: false
    },
    selection: {
      type: String,
      requied: false
    }
  }
}
</script>

<style lang="scss" scoped>
#preview-rows {
  width: 687px;
  user-select: none;
  * {
    cursor: default;
  }
}

.list-leave-active {
  width: 687px;
}
</style>
