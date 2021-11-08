<template>
  <img
    class="card"
    :src="cardImgUrl"
    alt="card">
</template>
<script lang="ts">
import {defineComponent} from 'vue';

import cardImgUrl from '@/assets/img/Cards/newCard.png'

export default defineComponent({
  name: 'Card',
  data() {
    return {
      cardImgUrl
    }
  }
})
</script>
<style lang="scss" scoped>

.card {
  height: 100%;
}

</style>
