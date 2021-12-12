const Trooper = './assets/img/Trooper/Trooper.png'
const Starege = './assets/img/Starege.png'

Vue.component('Hero', {
  template: `
    <div class="hero">
    <div class="hero-wrapper">
      <img class="profile" :src="Starege" alt="Avatar">
      <div class="hero-descr">
        <h2>{{username}}</h2>
        <h3>Level 666</h3>
        <div class="hero-exp">
          <span>0/500</span></div>
      </div>
    </div>
    <div class="hero-character">
      <img class="hero-img" :src="Trooper" alt="Hero Image">
    </div>
  </div>
  `,
  data() {
    return {
      Trooper,
      Starege
    }
  },
  props: {
    change: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    username() {
      return this.$store.getters.username
    }
  }
})
