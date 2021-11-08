<template>
  <div @click="handleClick">
    <img src="~@/assets/img/cross.png" alt="cross">
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'CloseButton',
  props: {
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.onClick()
    }
  }
})
</script>

<style scoped>
div {
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
  height: 53px;
  width: 53px;
  background-color: #FFFFFF;
  border-radius: 5px;
}
</style>
