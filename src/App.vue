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

.list-enter-active,
.list-leave-active,
.list-move {
  transition: 100ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateY(100px);
}

.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(0);
}

.list-leave-active {
  position: absolute;
}

</style>
