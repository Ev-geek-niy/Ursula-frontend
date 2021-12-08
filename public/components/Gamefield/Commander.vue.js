// Commander
const CommanderCalm = 'assets/img/Commander/Commander.png'
const CommanderSpawn = 'assets/img/Commander/Spawn.gif'

Vue.component('Commander', {
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
      Calm: CommanderCalm,
      Spawn: CommanderSpawn,
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
