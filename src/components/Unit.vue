<template>
  <div>
    <button @click="changeState(Calm)">Calm</button>
    <button @click="changeState(Death)">Die</button>
    <button @click="changeState(Spawn)">Spawn</button>
    <button @click="changeState(CoverShooting)">CoverShooting</button>
    <button @click="changeState(ShootingAndCovering)">ShootingAndCovering</button>
    <button @click="changeState(Hit)">Hit</button>
  </div>
  <div class="unit">
    <img :src="currentState" alt="Soldier">
  </div>
</template>
<script>
import { Calm, Death, Shooting, CoverShooting, ShootingAndCovering, Hit, Spawn } from '@/assets/img/Trooper';

export default {
  name: 'Unit',
  data() {
    return {
      Calm,
      Death,
      Spawn,
      Shooting,
      CoverShooting,
      ShootingAndCovering,
      Hit,
      currentState: Calm
    }
  },
  methods: {
    changeState(state) {
      this.currentState = state + '?a=' + Math.random();
    }
  },
}
</script>

<style lang="scss" scoped>
button {
  margin-bottom: 25px;
  margin-right: 10px;
  font-size: 16px;
  color: blue;
  cursor: pointer;

  &:hover {
    color: red;
  }
}

.unit {
  cursor: pointer;
  height: 175px;
  width: 100%;

  img {
    height: 100%;
  }
}
</style>
