<template>
  <div style="zoomStyle">
    <slot>
      Place comtrols herer
    </slot>
  </div>
</template>
<script>
export default {
  name: 'Zoomer',
  props: {
    zoom: {
      type: Number,
      default: 0.3
    }
  },
  methods: {
    zoomStyle() {
      return { zoom: this.zoom }
    }
  }
}
</script>
