<template>
  <img
    class="card"
    :src="cardImgUrl"
    alt="card">
</template>
<script>
import cardImgUrl from '@/assets/img/Cards/newCard.png'

export default {
  name: 'Card',
  data() {
    return {
      cardImgUrl
    }
  }
}
</script>
<style lang="scss" scoped>

.card {
  height: 100%;
}

</style>
