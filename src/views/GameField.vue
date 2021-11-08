<template>
  <div class="container">
    <div class="top">
      <div class="angle angle-left"></div>
      <div class="angle angle-right"></div>
      Menu
    </div>
    <div class="battlefield">
      <div class="player-field">
        <div class="player1">
          <Unit/>
          <!--          <Unit/>-->
          <!--          <Unit/>-->
          <!--          <Unit/>-->
        </div>
        <div class="player2">
          <!--          <Unit/>-->
          <!--          <Unit/>-->
          <!--          <Unit/>-->
          <!--          <Unit/>-->
        </div>
      </div>
    </div>
    <div class="table">
      <div class="hand">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div class="endturn">111</div>
    </div>
  </div>
</template>

<script>
import { Card, Unit, Shadow } from '../components';

export default {
  name: 'GameField',
  components: {Shadow, Unit, Card}
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.top {
  position: absolute;
  width: 450px;
  height: 55px;
  background-color: #FFFFFF;
  text-align: center;
  font-size: 35px;
  line-height: 55px;
  left: 50%;
  transform: translateX(-50%);
}

.angle {
  position: absolute;
  width: 80px;
  height: 80px;
  top: -42px;
  background-color: #FFFFFF;
  transform: rotate(45deg);

  &-left {
    left: -40px;
  }

  &-right {
    right: -40px;
  }
}

.battlefield {
  background: url("~@/assets/img/Backgrounds/Playground.png") no-repeat;
  height: calc(100% - 390px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.player-field {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
}

.table {
  position: absolute;
  bottom: 0;
  background-color: #FFFFFF;
  height: 390px;
  width: 100%;
}

.hand {
  margin: 33px auto 0;
  display: flex;
  justify-content: space-between;
  width: 1120px;
  height: 245px;
}

.endturn {
  margin: 30px auto 0;
  width: 380px;
  height: 30px;
  background-color: #73FCFD;
  text-align: center;
  font-size: 25px;
  line-height: 30px;
}

.player1, .player2 {
  //position: relative;
  //display: flex;
  //justify-content: space-between;
  //width: 800px;
}
</style>
