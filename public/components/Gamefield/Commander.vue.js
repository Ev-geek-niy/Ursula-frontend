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
        fantomTile: this.selectedTile !== this.index,
        selectedTile: this.selectedTile === this.index
      }
    }
  },
  props: {
    mirror: {
      type: Boolean,
    },
    unit: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    selectedTile: {
      type: Number,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    currentTurn: {
      type: String,
      required: true
    }
  },
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
