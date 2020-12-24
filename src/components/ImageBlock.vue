<template>
  <article class="block image-block" :style="blockStyle">
    <a :href="url" target="_blank">
      <img :src="src" :alt="alt" width="100%" />
    </a>
  </article>
</template>
<script>
export default {
  name: 'ImageBlock',
  props: {
    src: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'image',
    },
    background: {
      type: String,
      default: '#fff',
    },
    width: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    blockStyle() {
      return {
        backgroundColor: this.background,
      }
    },
  },
}
</script>
<style scoped lang="scss">
article {
  padding: 12px;
  text-align: center;
  display: flex;
  a {
    flex-grow: 1;
  }
}
</style>
