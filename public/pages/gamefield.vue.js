var Gamefield = {
  template: `
  <div class="game__container">
    <div class="top">
      <div class="angle angle-left"></div>
      <div class="angle angle-right"></div>
      Menu
    </div>
    <PlayerStatus
      v-for="(player, index) in players"
      :key="index"
      :mirror="index !== you"
    >
        {{index}}
    </PlayerStatus>
    {{reversedField}}
    <div class="battlefield">
      <Decorations/>
      <div class="player-field" v-if="firstPlayer">
        <Unit v-for="(unit, index) in field"
          v-if="unit.creature && !unit.creature.isCommander"
          :data-pos="index"
          :unit="unit"
          :mirror="index >= 3 ? true : false"
          :index="index"
          :selectedTile="selectedTile"
          :currentTurn="currentTurn"
          :on-click="() => handleTile(index)"
          />
        <Commander v-for="(unit, index) in field"
          v-if="unit.creature && unit.creature.isCommander"
          :data-pos="index"
          :unit="unit"
          :mirror="index >= 3 ? true : false"
          :index="index"
          :selectedTile="selectedTile"
          :currentTurn="currentTurn"
          :on-click="() => handleTile(index)"
        />
        <EmptyTile v-for="(unit, index) in field"
         v-if="!unit.creature"
         :data-pos="index"
         :mirror="index >= 3 ? true : false"
         :index="index"
         :selectedTile="selectedTile"
         :on-click="() => handleTile(index)"
        />
      </div>
      <div class="player-field" v-else>
        <Unit v-for="(unit, index) in reversedField"
          v-if="unit.creature && !unit.creature.isCommander"
          :data-pos="5 - index"
          :unit="unit"
          :mirror="index < 3 ? true : false"
          :index="5 - index"
          :selectedTile="selectedTile"
          :currentTurn="currentTurn"
          :on-click="() => handleTile(5 - index)"
        />
        <Commander v-for="(unit, index) in reversedField"
          v-if="unit.creature && unit.creature.isCommander"
          :data-pos="5 - index"
          :unit="unit"
          :mirror="index < 3 ? true : false"
          :index="5 - index"
          :selectedTile="selectedTile"
          :currentTurn="currentTurn"
          :on-click="() => handleTile(5 - index)"
        />
        <EmptyTile v-for="(unit, index) in field"
         v-if="!unit.creature"
         :data-pos="5 - index"
         :mirror="index < 3 ? true : false"
         :index="5 - index"
         :selectedTile="selectedTile"
         :on-click="() => handleTile(5 - index)"
        />
      </div>
    </div>
    <div class="table">
      <div class="hand">
        <Card v-for="card in hand"
          
        />
      </div>
      <div class="table__status">
        <DeckStatus>Cards left</DeckStatus>
        <DeckStatus>Discards</DeckStatus>
      </div>
        <button @click="create"
          style="height: 50px; width: 100px; position: absolute; bottom: 0"
        >
        Create Trooper
        </button>
      <div class="endturn">End turn</div>
      </div>
  </div>
  `,
  data() {
    return {
      hand: [1, 2, 3, 4, 5],
      selectedCard: null,
      selectedTile: null
    }
  },
  computed: {
    reversedField() {
      let reversedField_ = this.$store.state.mosxStoreSync.field
      return reversedField_.slice().reverse()
    },
    firstPlayer() {
      return Object.keys(this.players)[0] === this.you
    },
    players() {
      return this.$store.state.mosxStoreSync.players
    },
    you() {
      return this.$store.getters.id
    },
    field() {
      const playersId = Object.keys(this.players)
      if (playersId[0] === this.you) {
        return this.$store.state.mosxStoreSync.field
      } else {
        return this.$store.state.mosxStoreSync.field
      }
    },
    currentTurn() {
      return this.$store.state.mosxStoreSync.currentTurn
    }
  },
  methods: {
    create() {
      this.$store.dispatch('createCreature', {id: 9, index: this.selectedTile})
    },
    handleTile(index) {
      this.selectedTile = index
    }
  }
}
