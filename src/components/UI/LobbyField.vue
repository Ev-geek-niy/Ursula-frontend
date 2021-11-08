<template>
  <div>
    <img
      v-if="privatised"
      class="privateImg"
      :src="LockerIcon"
      alt="lockerIcon"
    />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import LockerIcon from '@/assets/img/Icons/locker 1.png'

export default defineComponent({
  name: 'LobbyField',
  data() {
    return {
      LockerIcon
    }
  },
  props: {
    privatised: {
      type: Boolean
    }
  },
})
</script>

<style lang="scss" scoped>
div {
  position: relative;

  .privateImg {
    position: absolute;
    top: 18px;
    right: 30px;
  }
}
</style>
