<template>
  <article class="block text-block" :style="blockStyle">
    <header v-text="header" />
    <section v-html="text" />
  </article>
</template>
<script>
export default {
  name: "TextBlock",
  props: {
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#333",
    },
    background: {
      type: String,
      default: "#fff",
    },
  },
  computed: {
    blockStyle() {
      return {
        backgroundColor: this.background,
        color: this.color,
      };
    },
  },
};
</script>
<style scoped lang="scss">
article {
  padding: 12px;
  header {
    font-size: 20px;
    font-weight: bold;
    display: block;
    margin-top: 8px;
  }
  section {
    font-size: 16px;
    font-weight: normal;
    display: block;
    margin-top: 8px;
    p {
      margin-top: 0 0 7px;
    }
  }
}
</style>