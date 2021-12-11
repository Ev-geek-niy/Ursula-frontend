// Trooper


Vue.component('Unit', {
  template: `
  <div class="unit__block" @click="handleClick">
    <div class="unit">
      <div>
        <img 
          :class="{'mirror': mirror}" 
          :src="stateUrl" 
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
        Spawn: TrooperSpawn,
        Death: TrooperDeath,
        Shoot: TrooperShoot,
        Hit: TrooperHit,
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
  },
  props: ['stateUrl', 'mirror', 'unit', 'index', 'selectedFriendTile', 'selectedEnemyTile', 'selectedTile', 'onClick', 'currentTurn'],
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
