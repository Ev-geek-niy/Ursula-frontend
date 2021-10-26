<template>
  <div class="hero">
    <div class="hero-wrapper">
      <div class="img"></div>
      <div class="hero-descr">
        <h2>Username</h2>
        <h3>Level 666</h3>
        <div class="hero-exp">
          <span>200/500</span></div>
      </div>
    </div>
    <div class="hero-character">
      <img class="hero-img" src="~@/assets/img/Trooper.png" alt="Hero Image">
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
<script>
export default {
  name: 'Hero',
  props: {
    change: {
      type: Boolean,
      required: true
    }
  }
}
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
    
    p {
      width: 275px;
      font-size: 50px;
      line-height: 45px;
      text-align: center;
    }
  }
}

.img {
  background-color: #FFFFFF;
  width: 150px;
  height: 150px;
}

</style>
