<template>
  <div class="wrapper" v-show="value" @click="checkClickOutside" ref="wrapper">
    <transition name="slide-up">
      <div class="modal" v-show="value">
        <div class="header">
          <button class="close" @click="$emit('input', false)">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
              />
            </svg>
          </button>

          <slot name="header"> </slot>
        </div>
        <div class="body">
          <slot> </slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    this.handler = event => {

      if (event.code === 'Escape' && this.value) {
        this.$emit('input', false)
      }
    }
    document.addEventListener('keydown', this.handler)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handler)
  },
  watch: {
    value: function(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkClickOutside(event) {
      if (event.target === this.$refs.wrapper) {
        this.$emit('input', false)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: fixed;
  background: rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;
}
.modal {
  border: 1px solid #8b9b9b;
  background: #fff;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 32px;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
}
.modal .header {
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
}

.close {
  float: right;
  outline: none;
  border: none;
  padding: 4px;
  color: #ccc;
  background-color: transparent;
  font-size: 24px;
  cursor: pointer;
  margin-top: -24px;
  margin-right: -24px;
}
.modal .body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.slide-up-enter-active {
  transition: all 0.3s ease;
}
.slide-up-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(500px);
  opacity: 0;
}
</style>
