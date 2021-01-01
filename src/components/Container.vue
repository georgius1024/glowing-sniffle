<template>
  <div class="row">
    <div
      class="col"
      :style="columnStyle"
      v-for="block in value"
      :key="block.id"
    >
      <component v-bind="block.props" :is="block.component" :key="block.id" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Container',
  props: {
    value: {
      type: Array,
      requied: true
    }
  },
  computed: {
    cols() {
      return this.value.length
    },
    columnStyle() {
      return {
        width: `${(100 / this.cols).toFixed(2)}%`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  .col {
    display: flex;
    & > * {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
