<template>
  <div class="select-character">
    <div class="container">
      <div class="wrapper">
        <Hero/>
        <div class="palette">
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
          <div class="variant">
            <img :src="Trooper" alt="trooper">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Trooper from '@/assets/img/Trooper/Trooper.png'
import { Hero } from '@/components'

export default {
  name: 'SelectCharacter',
  components: {Hero},
  data() {
    return {
      Trooper
    }
  }
}
</script>

<style lang="scss" scoped>
.select-character {
  background: url("~@/assets/img/Backgrounds/Background_Menu.png") no-repeat;
}

.container {
  width: calc(100vw - 55px);
  height: 100vh;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}

.palette {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 56px;
  height: calc(100vh - 80px);
  width: 900px;
  background: rgba(255, 255, 255, 0.5);
}

.variant {
  height: 260px;
  width: 260px;
  background-color: #C4C4C4;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    height: 85%;
  }
}


</style>
