<template>
  <div class="sorter-modal" v-show="show">
    <button class="close" @click="$emit('done')">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
        />
      </svg>
    </button>

    <div class="sorter-inner">
      <Sorter v-model="blocks" @sort="$emit('sort', $event)" />
    </div>
  </div>
</template>

<script>
import Sorter from './sorter'
export default {
  name: 'SorterModal',
  components: {
    Sorter
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
&.modal {
  max-height: 100vh;
  overflow-y: hidden;
}
.sorter-modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  .sorter-inner {
    background-color: #fff;
    overflow: hidden;
    padding: 32px 64px;
  }
  .close {
    position: fixed;
    top: 24px;
    right: -36px;
    outline: none;
    border: none;
    padding: 4px;
    color: #ccc;
    background-color: transparent;
    font-size: 24px;
    cursor: pointer;
  }
  max-height: 100vh;
  overflow-y: scroll;
}
</style>
