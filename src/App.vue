<template>
  <div id="app">
    <div ref="layout" class="layout">
      <component
        v-for="block in mappedBlocks"
        v-bind="block.props"
        :is="block.component"
        :key="block.id"
      />
    </div>
    <draggable ref="draggable" v-model="images" class="sortable">
      <img v-for="(image, index) in images" :src="image" :key="index" />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import domtoimage from "dom-to-image";
import TextBlock from "./components/TextBlock";
import ButtonBlock from "./components/ButtonBlock";
import ImageBlock from "./components/ImageBlock";
import Layout from "./components/Layout";
import blocks from "./blocks";

export default {
  name: "App",
  components: {
    ButtonBlock,
    TextBlock,
    ImageBlock,
    Layout,
    draggable
  },
  data() {
    return {
      blocks,
      images: []
    };
  },
  computed: {
    keys() {
      return this.blocks.map(e => e.id).join(",");
    },
    mappedBlocks() {
      return this.blocks.map(e => {
        switch (e.type) {
          case "text":
            return {
              component: TextBlock,
              id: e.id,
              props: e
            };
          case "button":
            return {
              component: ButtonBlock,
              id: e.id,
              props: e
            };
          case "image":
            return {
              component: ImageBlock,
              id: e.id,
              props: e
            };
        }
      });
    }
  },
  mounted() {
    setTimeout(() => this.capture(), 100);
  },
  updated() {
    /*this.capture();*/
  },
  methods: {
    async capture() {
      const t = new Date().valueOf();
      const el = this.$refs.layout;
      const blocks = Array.from(el.childNodes);
      const promises = blocks.map(domtoimage.toSvg);
      this.images = await Promise.all(promises);
      console.log(new Date().valueOf() - t);
    },
    inspect(...args) {
      console.log(args);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  flex-direction: row;
  .layout {
    max-width: 200px;
    margin-right: 100px;
  }
}
.sortable {
  display: flex;
  flex-direction: column;

  img {
    width: 400px;
  }
  > * {
    border: 1px solid #ccc;
    margin: 4px 0;
    user-select: none;
    cursor: pointer;
  }
}
</style>
