<template>
  <div class="hero">
    <div class="hero-wrapper">
      <img class="profile" :src="Starege" alt="Avatar">
      <div class="hero-descr">
        <h2>Username</h2>
        <h3>Level 666</h3>
        <div class="hero-exp">
          <span>200/500</span></div>
      </div>
    </div>
    <div class="hero-character">
      <img class="hero-img" :src="Trooper" alt="Hero Image">
      <router-link to="/change" v-if="change">
        <p class="hero__btn">
          Change my character
        </p>
      </router-link>
      <router-link to="/menu" v-else>
        <p class="hero__btn">
          Back
        </p>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

import Trooper from '@/assets/img/Trooper/Trooper.png'
import Starege from '@/assets/img/Starege.png'

export default defineComponent({
  name: 'Hero',
  data() {
    return {
      Trooper,
      Starege
    }
  },
  props: {
    change: {
      type: Boolean,
    }
  }
})
</script>
<style lang="scss" scoped>

.hero {
  padding-top: 56px;
  width: 700px;
  height: 150px;

  &-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &-descr {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 60px;
      line-height: 55px;
    }

    h3 {
      font-size: 32px;
      line-height: 32px;
    }
  }

  &-exp {
    width: 500px;
    height: 33px;
    background-color: #FFFFFF;
    text-align: center;

    span {
      font-size: 18px;
      line-height: 33px;
    }
  }

  &-img {
    width: 343px;
    height: 536px;
  }

  &-character {
    display: flex;
    flex-direction: column;
    padding-top: 67px;
    overflow-wrap: break-word;
    align-items: center;
  }

  &__btn {
    margin-top: 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    font-size: 40px;
    width: 275px;
    text-align: center;
  }
}

.profile {
  background-color: #FFFFFF;
  width: 150px;
  height: 150px;
}

</style>
