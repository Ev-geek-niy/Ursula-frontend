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
    <div class="battlefield">
      <Decorations/>
      <div class="player-field">
        <Unit v-for="(unit, index) in field"
        v-if="unit.creature"
        :data-pos="index"
        :isCommander="unit.creature.isCommander"
        :mirror="index >= 3 ? true : false"
        />
      </div>
    </div>
    <div class="table">
      <div class="hand">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
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
<!--      <div class="endturn">End turn</div>-->
      </div>
  </div>
  `,
  computed: {
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
        return this.$store.state.mosxStoreSync.field.reverse()
      }
    }
  },
  methods: {
    create() {
      this.$store.dispatch('createCreature', {id: 9, index: 2})
    }
  }
}
