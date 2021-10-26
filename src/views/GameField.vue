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
          <Shadow/>
          <Unit/>
          <Unit/>
          <Unit/>
          <Unit/>
        </div>
        <div class="player2">
          <Shadow/>
          <Unit/>
          <Unit/>
          <Unit/>
          <Unit/>
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
      <div class="endturn">End turn</div>
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
  height: calc(100% - 380px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.player-field {
  display: flex;
  justify-content: space-around;
}

.table {
  position: absolute;
  bottom: 0;
  background-color: #FFFFFF;
  height: 380px;
  width: 100%;
}

.hand {
  margin: 0 auto;
  padding-top: 17px;
  display: flex;
  justify-content: space-between;
  width: 1200px;
}

.endturn {
  margin: 10px auto 0;
  width: 380px;
  height: 30px;
  background-color: #73FCFD;
  text-align: center;
  font-size: 25px;
  line-height: 30px;
}

.player1 {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 500px;
}

.player2 {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 500px;
}
</style>
