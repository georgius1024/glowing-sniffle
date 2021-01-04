<template>
  <div class="add-block">
    <div class="caption">
      Add block
    </div>
    <div class="toolbar">
      <button @click="add('text')">
        Text
      </button>
      <button @click="add('button')">
        Button
      </button>
      <button @click="add('image')">
        Image
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddBlockToolbar',
  methods: {
    add(type) {
      this.$emit('add', type)
    }
  }
}
</script>
<style lang="scss" scoped>
.add-block {
  margin-top: 20px;
  .caption {
    text-align: center;
    font-weight: bold;
  }
  .toolbar {
    flex-grow: 1;
    margin: 6px 0;
    & > button {
      padding: 6px;
      background-color: #ccc;
      border: 1px solid #333;
      color: #333;
      width: 33.33%;
      cursor: pointer;
    }
  }
}
</style>
