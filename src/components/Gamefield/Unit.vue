<template>
  <div class="unit">
    <img :class="{'mirror': mirror}" :src="currentState" alt="Soldier">
    <div class="hp"></div>
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
  props: {
    mirror: {
      type: Boolean,
    }
  },
  methods: {
    changeState(state) {
      this.currentState = state
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
  display: inline-block;
  cursor: pointer;
  height: 200px;
  z-index: 5;

  img {
    height: 100%;
  }

  .mirror {
    transform: scaleX(-1);
  }

  .hp {
    position: absolute;
    width: 132px;
    height: 15px;
    background-color: red;
    border: 2px solid #FFFFFF;
    bottom: -25px;
  }
}
</style>
