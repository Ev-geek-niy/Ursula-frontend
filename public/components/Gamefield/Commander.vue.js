// Commander
const CommanderSpawn = 'assets/img/Commander/Spawn.gif'
const CommanderDeath = 'assets/img/Commander/Death.gif'
const CommanderShoot = 'assets/img/Commander/Shoot.gif'
const CommanderHit = 'assets/img/Commander/Hit.gif'

Vue.component('Commander', {
  template: `
  <div class="unit__block" @click="handleClick">
    <div class="unit">
      <div>
        <img 
          :class="{'mirror': mirror}" 
          :src="testState" 
          alt="Soldier"
        >
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
      unitUrl: {
        Spawn: CommanderSpawn,
        Death: CommanderDeath,
        Shoot: CommanderShoot,
        Hit: CommanderHit
      },
      currentState: null
    }
  },
  computed: {
    unitTileClass() {
      return {
        selectedFriendTile: this.selectedFriendTile === this.index,
        selectedEnemyTile: this.selectedEnemyTile === this.index
      }
    },
    testState() {
      return this.unitUrl[this.$store.state.mosxStoreSync.field[this.index].creature.state[this.state]] + '?a=' + Math.random();
    }
  },
  props: ['state', 'mirror', 'unit', 'index', 'selectedFriendTile', 'selectedEnemyTile', 'selectedTile', 'onClick', 'currentTurn'],
  methods: {
    changeState(state) {
      this.currentState = state + '?a=' + Math.random();
    },
    handleClick() {
      this.onClick()
    }
  },
  created() {
    this.currentState = this.unitUrl[this.$store.state.mosxStoreSync.field[this.index].creature.state[this.state]] + '?a=' + Math.random();
  }
})
