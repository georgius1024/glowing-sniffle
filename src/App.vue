<template>
  <div id="app">
    <composer />
  </div>
</template>

<script>
import Composer from './views/Composer'
export default {
  name: 'App',
  components: {
    Composer
  },
  methods: {
    sort() {
      this.showSorter = true
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
  box-sizing: border-box;
}
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
