<template>
  <div id="app">
    <sorter1 v-show="false" />
    <Stack />
  </div>
</template>

<script>
import Sorter1 from './views/Sorter1'
import Stack from './views/Stack'

export default {
  name: 'App',
  components: {
    Sorter1,
    Stack,
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
