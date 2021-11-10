<template>
  <div>
    <button @click="changeState(Calm)">Calm</button>
    <button @click="changeState(Death)">Die</button>
    <button @click="changeState">Spawn</button>
    <button @click="changeState">Cover</button>
    <button @click="changeState">Shoot</button>
    <button @click="changeState(Shooting)">Hit</button>
    <button @click="changeState(CoverShooting)">Cover Hit</button>
    <button @click="changeState(Test)">Test Gif</button>
  </div>
  <div class="unit">
    <img :src="currentState" alt="Soldier">
  </div>
</template>
<script>
import { Calm, Death, Shooting, CoverShooting, Test } from '@/assets/img/Trooper';

export default {
  name: 'Unit',
  data() {
    return {
      Calm,
      Death,
      Shooting,
      CoverShooting,
      Test,
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
