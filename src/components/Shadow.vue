<template>
  <div class="shadow moving"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Shadow'
})
</script>

<style lang="scss" scoped>
.shadow {
  position: absolute;
  left: -300px;
  width: 500px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50px;
}

.moving {
  animation: airstrike 10s linear;
}

@keyframes airstrike {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
