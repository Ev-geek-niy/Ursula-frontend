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
        <div>
          <img v-if="smoked"
            class="smoked" 
            :src="smokeSrc" 
            alt="smoke">
          <img v-if="hasShield"
            class="shield"
            :src="shieldSrc" 
            alt="smoke">
        </div>
      </div>
      <div class="tile" :class="unitTileClass">
      </div>
    </div>
  </div>
  `,
  computed: {
    unitTileClass() {
      return {
        selectedFriendTile: this.selectedFriendTile === this.index,
        selectedEnemyTile: this.selectedEnemyTile === this.index
      }
    },
    smoked() {
      if (this.unit.effects[0]) {
        return this.unit.effects[0].name === 'smoked'
      } else return false
    },
    hasShield() {
      return this.unit.creature.hasShield
    }
  },
  props: ['smokeSrc', 'shieldSrc', 'stateUrl', 'mirror', 'unit', 'index', 'selectedFriendTile', 'selectedEnemyTile', 'selectedTile', 'onClick', 'currentTurn'],
  methods: {
    handleClick() {
      this.onClick()
    }
  },
})
