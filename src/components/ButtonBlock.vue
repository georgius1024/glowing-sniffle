<template>
  <article class="block text-block" :style="blockStyle">
    <a :href="url" target="_blank" :style="buttonStyle" v-html="text" />
  </article>
</template>
<script>
export default {
  name: "ButtonBlock",
  props: {
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#333"
    },
    button: {
      type: String,
      default: "#ccc"
    },
    background: {
      type: String,
      default: "#fff"
    },
    size: {
      type: Number,
      default: 100
    }
  },
  computed: {
    blockStyle() {
      return {
        backgroundColor: this.background,
        color: this.color
      };
    },
    buttonStyle() {
      return {
        backgroundColor: this.button,
        color: this.color,
        width: `${this.size}vw`
      };
    }
  }
};
</script>
<style scoped lang="scss">
article {
  padding: 12px;
  display: flex;
  justify-content: center;
  a {
    font-size: 16px;
    font-weight: normal;
    margin: 12px auto;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    padding: 5px;
  }
}
</style>
