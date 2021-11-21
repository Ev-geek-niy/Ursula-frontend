const Calm = 'assets/img/Trooper/Trooper.png'
const Death = 'assets/img/Trooper/Death.gif'
const Shooting = 'assets/img/Trooper/Shooting.gif'
const CoverShooting = 'assets/img/Trooper/CoverShooting.gif'
const Hit = 'assets/img/Trooper/Hit.gif'
const ShootingAndCovering = 'assets/img/Trooper/Shooting-and-covering.gif'
const Spawn = 'assets/img/Trooper/Teleportation.gif'

Vue.component('Unit', {
  template: `
  <div class="unit">
    <img :class="{'mirror': mirror}" :src="currentState" alt="Soldier">
    <div class="hp"></div>
  </div>
  `,
  data() {
    return {
      Calm,
      Death,
      Shooting,
      CoverShooting,
      Hit,
      Spawn,
      ShootingAndCovering,
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
})
