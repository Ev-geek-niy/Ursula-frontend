<template>
  <div class="container">
    <div class="top">
      <div class="angle angle-left"></div>
      <div class="angle angle-right"></div>
      Menu
    </div>
    <div class="battlefield">
      <Decorations/>
      <div class="player-field">
        <div class="player1">
          <Unit data-pos="1"/>
          <Unit data-pos="2"/>
          <Unit data-pos="3"/>
        </div>
        <div class="player2">
          <Unit data-pos="4" mirror/>
          <Unit data-pos="5" mirror/>
          <Unit data-pos="6" mirror/>
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
import { Card, Unit, Shadow } from '../components/Gamefield';
import Decorations from '@/components/Gamefield/Decorations';

export default {
  name: 'GameField',
  components: {Shadow, Unit, Card, Decorations}
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
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
  position: relative;
  background: url("~@/assets/img/Backgrounds/BattleGround.png") no-repeat;
  height: calc(100% - 390px);
}

.table {
  position: absolute;
  bottom: 0;
  background-color: #FFFFFF;
  height: 390px;
  width: 100%;
  border-top: 4px solid #626262;
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

.player1 {
  div[data-pos='1'] {
    position: absolute;
    left: 108px;
    top: 313px;
  }

  div[data-pos='2'] {
    position: absolute;
    left: 408px;
    top: 451px;
  }

  div[data-pos='3'] {
    position: absolute;
    left: 708px;
    top: 347px;
  }
}

.player2 {
  div[data-pos='4'] {
    position: absolute;
    right: 108px;
    top: 313px;
  }

  div[data-pos='5'] {
    position: absolute;
    right: 408px;
    top: 451px;
  }

  div[data-pos='6'] {
    position: absolute;
    right: 708px;
    top: 347px;
  }
}
</style>
