<template>
  <div id="stack">
    <container :cols="1">
      <template v-slot:col1>
        <div class="wrapper">
          <component
            v-bind="mappedBlocks[0].props"
            :is="mappedBlocks[0].component"
            :key="mappedBlocks[0].id"
          />
        </div>
      </template>
    </container>
    <container :cols="2">
      <template v-slot:col1>
        <div class="wrapper">
          <component
            v-bind="mappedBlocks[1].props"
            :is="mappedBlocks[1].component"
            :key="mappedBlocks[1].id"
          />
        </div>
      </template>
      <template v-slot:col2>
        <div class="wrapper">
          <component
            v-bind="mappedBlocks[2].props"
            :is="mappedBlocks[2].component"
            :key="mappedBlocks[2].id"
          />
        </div>
      </template>
    </container>
  </div>
</template>

<script>
import TextBlock from "../components/TextBlock";
import ButtonBlock from "../components/ButtonBlock";
import ImageBlock from "../components/ImageBlock";
import Container from "../components/Container";
import blocks from "../blocks";

export default {
  name: "Stack",
  components: {
    ButtonBlock,
    TextBlock,
    ImageBlock,
    Container
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
#stack {
  width: 400px;
  user-select: none;
  cursor: pointer;
  .wrapper > * {
    zoom: 0.4;
  }
}
</style>
