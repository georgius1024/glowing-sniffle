<template>
  <section class="row">
    <template v-if="cols >= 1">
      <div class="col" :style="columnStyle">
        <slot name="col1"> Col 1 </slot>
      </div>
    </template>
    <template v-if="cols >= 2">
      <div class="col" :style="columnStyle">
        <slot name="col2"> Col 2 </slot>
      </div>
    </template>
    <template v-if="cols === 3">
      <div class="col" :style="columnStyle">
        <slot name="col3"> Col 3 </slot>
      </div>
    </template>
  </section>
</template>
<script>
export default {
  props: {
    cols: {
      type: Number,
      requied: true,
    },
  },
  computed: {
    columnStyle() {
      return {
        width: `${(100 / this.cols).toFixed(2)}%`,
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;
  .col {
    border: 1px dotted silver;
    display: flex;
    & > * {
      display: flex;
      flex-grow: 1;
    }
  }
}
</style>
