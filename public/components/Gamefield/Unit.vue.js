// Trooper
const TrooperCalm = 'assets/img/Trooper/Trooper.png'
const TrooperDeath = 'assets/img/Trooper/Death.gif'
const TrooperShooting = 'assets/img/Trooper/Shooting.gif'
const TrooperCoverShooting = 'assets/img/Trooper/CoverShooting.gif'
const TrooperHit = 'assets/img/Trooper/Hit.gif'
const TrooperShootingAndCovering = 'assets/img/Trooper/Shooting-and-covering.gif'
const TrooperSpawn = 'assets/img/Trooper/Teleportation.gif'

// Commander
const CommanderCalm = 'assets/img/Commander/Commander.png'
const CommanderSpawn = 'assets/img/Commander/Spawn.gif'

Vue.component('Unit', {
  template: `
  <div class="unit">
    <button @click="changeState(Spawn)">spawn</button>
    <img :class="{'mirror': mirror}" :src="currentState" alt="Soldier">
    <div class="hp"></div>
  </div>
  `,
  data() {
    if (!this.isCommander) {
      return {
        Calm: TrooperCalm,
        Death: TrooperDeath,
        Shooting: TrooperShooting,
        CoverShooting: TrooperCoverShooting,
        Hit: TrooperHit,
        Spawn: TrooperSpawn,
        ShootingAndCovering: TrooperShootingAndCovering,
        currentState: this.Calm
      }
    } else {
      return {
        Calm: CommanderCalm,
        Spawn: CommanderSpawn,
        currentState: this.Calm
      }
    }
  },
  computed: {},
  props: {
    mirror: {
      type: Boolean,
    },
    isCommander: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    changeState(state) {
      this.currentState = state + '?a=' + Math.random();
    }
  },
  created() {
    this.currentState = this.Spawn + '?a=' + Math.random();
  }
})
