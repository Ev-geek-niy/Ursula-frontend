// Trooper
const TrooperCalm = 'assets/img/Trooper/Trooper.png'
const TrooperDeath = 'assets/img/Trooper/Death.gif'
const TrooperHit = 'assets/img/Trooper/Hit.gif'
const TrooperShootingAndCovering = 'assets/img/Trooper/Shooting-and-covering.gif'
const TrooperSpawn = 'assets/img/Trooper/Teleportation.gif'

Vue.component('Unit', {
  template: `
  <div class="unit__block" @click="handleClick">
    <div class="unit">
      <div>
        <img 
          :class="{'mirror': mirror}" 
          :src="currentState" 
          alt="Soldier"
        >
        <button @click="changeState(Spawn)">spawn</button>
        <button @click="changeState(Shooting)">Shooting</button>
        <span class="unit__health">
          {{unit.creature.health}}
        </span>
        <span class="unit__attack">
          {{unit.creature.attack}}
        </span>
      </div>
      <div class="tile" :class="unitTileClass">
      {{index}}
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      Calm: TrooperCalm,
      Death: TrooperDeath,
      Shooting: TrooperShootingAndCovering,
      Hit: TrooperHit,
      Spawn: TrooperSpawn,
      currentState: this.Calm
    }
  },
  computed: {
    unitTileClass() {
      return {
        selectedFriendTile: this.selectedFriendTile === this.index,
        selectedEnemyTile: this.selectedEnemyTile === this.index
      }
    }
  },
  props: ['mirror', 'unit', 'index', 'selectedFriendTile', 'selectedEnemyTile', 'selectedTile', 'onClick', 'currentTurn'],
  methods: {
    changeState(state) {
      this.currentState = state + '?a=' + Math.random();
    },
    handleClick() {
      this.onClick()
    }
  },
  created() {
    this.currentState = this.Spawn + '?a=' + Math.random();
  }
})
