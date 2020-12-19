<template>
  <div id="sorter">
    <draggable ref="draggable" v-model="blocks" class="sortable">
      <div v-for="block in mappedBlocks" :key="block.id" class="wrapper">
        <component v-bind="block.props" :is="block.component" :key="block.id" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TextBlock from "../components/TextBlock";
import ButtonBlock from "../components/ButtonBlock";
import ImageBlock from "../components/ImageBlock";
import Layout from "../components/Layout";
import blocks from "../blocks";

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
  methods: {
    inspect(...args) {
      console.log(args);
    }
  }
};
</script>

<style lang="scss">
#sorter {
  width: 200px;
  user-select: none;
  cursor: pointer;
  .wrapper > * {
    zoom: 0.4;
  }
}
</style>
