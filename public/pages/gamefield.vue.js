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
    <div style="display: none">{{reversedField}}</div>
    <div class="battlefield">
      <Decorations/>
      <div class="player-field" v-if="firstPlayer">
        <Unit v-for="(unit, index) in field"
          v-if="unit.creature && !unit.creature.isCommander"
          :data-pos="index == 5 || index == 0 ? 5 - index : index"
          :unit="unit"
          :mirror="[0,3,4].includes(index) ? true : false"
          :index="index"
          :selectedTile="selectedTile"
          :selectedFriendTile="selectedFriendTile"
          :selectedEnemyTile="selectedEnemyTile"
          :currentTurn="currentTurn"
          :on-click="() => handleTile(index)"
          />
        <Commander v-for="(unit, index) in field"
          v-if="unit.creature && unit.creature.isCommander"
          :data-pos="index == 5 || index == 0 ? 5 - index : index"
          :unit="unit"
          :mirror="[0,3,4].includes(index) ? true : false"
          :index="index"
          :selectedTile="selectedTile"
          :selectedFriendTile="selectedFriendTile"
          :selectedEnemyTile="selectedEnemyTile"
          :currentTurn="currentTurn"
          :on-click="() => handleTile(index)"
        />
        <EmptyTile v-for="(unit, index) in field"
         v-if="!unit.creature"
         :data-pos="index == 5 || index == 0 ? 5 - index : index"
         :mirror="[0,3,4].includes(index) ? true : false"
         :index="index"
         :selectedTile="selectedTile"
         :selectedFriendTile="selectedFriendTile"
          :selectedEnemyTile="selectedEnemyTile"
         :on-click="() => handleTile(index)"
        />
      </div>
      <div class="player-field" v-else>
        <Unit v-for="(unit, index) in reversedField"
          v-if="unit.creature && !unit.creature.isCommander"
          :data-pos="index == 5 || index == 0 ? index : 5 - index"
          :unit="unit"
          :mirror="[1,2,5].includes(index) ? true : false"
          :index="index"
          :selectedTile="selectedTile"
          :selectedFriendTile="selectedFriendTile"
          :selectedEnemyTile="selectedEnemyTile"
          :currentTurn="currentTurn"
          :on-click="() => handleTile(index)"
        />
        <Commander v-for="(unit, index) in reversedField"
          v-if="unit.creature && unit.creature.isCommander"
          :data-pos="index == 5 || index == 0 ? index : 5 - index"
          :unit="unit"
          :mirror="[1,2,5].includes(index) ? true : false"
          :index="index"
          :selectedTile="selectedTile"
          :selectedFriendTile="selectedFriendTile"
          :selectedEnemyTile="selectedEnemyTile"
          :currentTurn="currentTurn"
          :on-click="() => handleTile(index)"
        />
        <EmptyTile v-for="(unit, index) in reversedField"
         v-if="!unit.creature"
         :data-pos="index == 5 || index == 0 ? index : 5 - index"
         :mirror="[1,2,5].includes(index) ? true : false"
         :index="index"
         :selectedTile="selectedTile"
         :selectedFriendTile="selectedFriendTile"
         :selectedEnemyTile="selectedEnemyTile"
         :currentTurn="currentTurn"
         :on-click="() => handleTile(index)"
        />
      </div>
    </div>
    <div class="table">
      <div class="hand">
        <Card v-for="(card) in hand"
          :on-click="() => handleCard(card.id)"
          :key="card.id"
          :id="card.id"
          :selectedCard="selectedCard"
        />
        {{selectedCard}}
      </div>
      <div class="table__status">
        <DeckStatus>Cards left</DeckStatus>
        <DeckStatus>Discards</DeckStatus>
      </div>
      <div>
        <button @click="useCard"
          style="height: 50px; width: 100px; position: absolute; bottom: 0"
        >
        ACTIVATE CARD
        </button>
        <button @click="attack"
          style="height: 50px; width: 100px; position: absolute; bottom: 0; left: 150px;"
        >
        ATTACK
        </button>
      </div>
      <div class="endturn" @click="endTurn">End turn</div>
      </div>
  </div>
  `,
  data() {
    return {
      hand: [{id: 9}, {}, {id: 5}, {}, {}],
      selectedCard: null,
      selectedTile: null,
      selectedFriendTile: null,
      selectedEnemyTile: null,
      reversed: false,
    }
  },
  computed: {
    reversedField() {
      let reversedField_ = this.$store.state.mosxStoreSync.field.reverse()
      console.log(reversedField_)
      return reversedField_
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
        if (!this.reversed) {
          let reversedField_ = this.$store.state.mosxStoreSync.field
          console.log(reversedField_)
          this.reversed = true
          return reversedField_.reverse()
        }
        return reversedField_
      }
    },
    currentTurn() {
      return this.$store.state.mosxStoreSync.currentTurn
    }
  },
  methods: {
    useCard() {
      // выбран коммандир?
      if (!this.firstPlayer) {
        if (this.selectedTile == 0 || this.selectedTile == 5) {
          this.selectedTile = 5 - this.selectedTile
        }
      }
      switch (this.selectedCard) {
        case 9:
          //create trooper
          this.$store.dispatch('executeCardEffect', {id: 9, index: this.selectedFriendTile})
          break;
        case 3:
          //grenade
          this.$store.dispatch('executeCardEffect', {id: 3, index: this.selectedEnemyTile})
          break;
        case 5:
          //heal
          this.$store.dispatch('executeCardEffect', {id: 4, index: this.selectedFriendTile})
          break;
      }
    },
    endTurn() {
      this.$store.dispatch('endTurn')
    },
    attack() {
      this.$store.dispatch('attack', {source: this.selectedFriendTile, index: this.selectedEnemyTile})
    },
    handleTile(index) {
      this.selectedTile = index;
      if (this.firstPlayer && [1, 2, 5].includes(index)) {
        this.selectedFriendTile = index
      } else if (this.firstPlayer && [0, 3, 4].includes(index)) {
        this.selectedEnemyTile = index;
      } else if (!this.firstPlayer && [0, 3, 4].includes(index)) {
        this.selectedFriendTile = index
      } else if (!this.firstPlayer && [1, 2, 5].includes(index)) {
        this.selectedEnemyTile = index
      }
    },
    handleCard(index) {
      this.selectedCard = index
    }
  }
}
