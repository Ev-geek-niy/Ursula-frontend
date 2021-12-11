const CommanderSpawn = 'assets/img/Commander/Spawn.gif'
const CommanderDeath = 'assets/img/Commander/Death.gif'
const CommanderShoot = 'assets/img/Commander/Shoot.gif'
const CommanderHit = 'assets/img/Commander/Hit.gif'

const CommanderSpawnRed = 'assets/img/Commander/Spawn_red.gif'
const CommanderDeathRed = 'assets/img/Commander/Death_red.gif'
const CommanderShootRed = 'assets/img/Commander/Shoot_red.gif'
const CommanderHitRed = 'assets/img/Commander/Hit_red.gif'

const TrooperSpawn = 'assets/img/Trooper/Teleportation.gif'
const TrooperDeath = 'assets/img/Trooper/Death.gif'
const TrooperHit = 'assets/img/Trooper/Hit.gif'
const TrooperShoot = 'assets/img/Trooper/Shooting-and-covering.gif'

const TrooperSpawnRed = 'assets/img/Trooper/Teleportation_red.gif'
const TrooperDeathRed = 'assets/img/Trooper/Death_red.gif'
const TrooperHitRed = 'assets/img/Trooper/Hit_red.gif'
const TrooperShootRed = 'assets/img/Trooper/Shooting-and-covering_red.gif'


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
    <div style="display: none">{{selectedCard}}</div>
    <div class="battlefield">
      <Decorations/>
      <div class="player-field" v-if="firstPlayer">
        <Unit v-for="(unit, index) in field"
          v-if="unit.creature && !unit.creature.isCommander"
          :data-pos="index == 5 || index == 0 ? 5 - index : index"
          :unit="unit"
          :mirror="[0,3,4].includes(index) ? true : false"
          :index="index"
          :stateUrl="units[index]"
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
          :stateUrl="units[index]"
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
          :stateUrl="units[index]"
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
          :stateUrl="units[5 - index]"
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
        <Card v-for="(card, index) in hand"
          :on-click="() => handleCard(card, index)"
          :key="index"
          :id="card"
          :index="index"
          :selectedCard="selectedCard.index"
        />
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
      units: [CommanderSpawnRed, TrooperSpawnRed, TrooperSpawnRed, TrooperSpawnRed, TrooperSpawnRed, CommanderSpawn, CommanderSpawnRed],
      selectedCard: {id: null, index: null},
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
    },
    hand() {
      return this.$store.state.mosxStoreSync.players[this.you].hand
    }
  },
  methods: {
    useCard() {
      console.log('Работает?')
      // выбран коммандир?
      if (!this.firstPlayer) {
        if (this.selectedTile == 0 || this.selectedTile == 5) {
          this.selectedTile = 5 - this.selectedTile
        }
      }
      switch (this.selectedCard.id) {
        //Rifle
        case 1:
          this.$store.dispatch('executeCardEffect', {
            id: 0,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break;
        //Heavy Rifle
        case 2:
          this.$store.dispatch('executeCardEffect', {
            id: 1,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break;
        //Grenade
        case 3:
          this.$store.dispatch('executeCardEffect', {
            id: 2,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break
        //Airstrike
        case 4:
          this.units[this.selectedEnemyTile] = Hit;
          this.$store.dispatch('executeCardEffect', {
            id: 3,
            index: this.selectedEnemyTile,
            handIndex: this.selectedCard.index
          })
          break;
        //Healthpack
        case 5:
          this.$store.dispatch('executeCardEffect', {
            id: 4,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break;
        //Smoke Grenade
        case 6:
          this.$store.dispatch('executeCardEffect', {
            id: 5,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break;
        //Shield
        case 7:
          this.$store.dispatch('executeCardEffect', {
            id: 6,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break;
        //Battle Armor
        case 8:
          this.$store.dispatch('executeCardEffect', {
            id: 7,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break;
        //Trooper
        case 9:
          this.units[this.selectedFriendTile] = this.setStateUrl(TrooperSpawn)
          this.$store.dispatch('executeCardEffect', {
            id: 8,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break;
        //Heavy Trooper
        case 10:
          this.$store.dispatch('executeCardEffect', {
            id: 9,
            index: this.selectedFriendTile,
            handIndex: this.selectedCard.index
          })
          break;
      }
    },
    setStateUrl(url) {
      return url + '?a=' + Math.random();
    },
    endTurn() {
      this.$store.dispatch('endTurn')
    },
    attack() {
      //Проверка атаки командира команды 1
      if (this.selectedFriendTile === 5) {
        this.units[this.selectedFriendTile] = this.setStateUrl(CommanderShoot)
        //Проверка, что атакуют командира команды 2
        if (this.selectedEnemyTile === 0) {
          this.units[this.selectedEnemyTile] = this.setStateUrl(CommanderHitRed)
        }
        //Иначе атакуют обычных юнитов
        else {
          this.units[this.selectedEnemyTile] = this.setStateUrl(TrooperHitRed)
        }
      }
      //Проверка атаки командира командира 2
      else if (this.selectedFriendTile === 0) {
        this.units[5 - this.selectedFriendTile] = this.setStateUrl(CommanderShoot)
        //Проверка, что атакуют командира команды 1
        if (this.selectedEnemyTile === 5) {
          this.units[5 - this.selectedEnemyTile] = this.setStateUrl(CommanderHitRed)
        }
        //Иначе атакуют обычных юнитов
        else {
          this.units[this.selectedEnemyTile] = this.setStateUrl(TrooperHitRed)
        }
      }
      //Иначе атакует обычный юнит
      else {
        this.units[this.selectedFriendTile] = this.setStateUrl(TrooperShoot)
        //Проверка на атаку по командиру
        if (this.selectedEnemyTile === 0 || this.selectedEnemyTile === 5) {
          this.units[5 - this.selectedEnemyTile] = this.setStateUrl(CommanderHitRed)
        } else {
          this.units[this.selectedEnemyTile] = this.setStateUrl(TrooperHitRed)
        }
      }
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
    handleCard(id, index) {
      this.selectedCard.id = id
      this.selectedCard.index = index
    }
  },
  created() {
    if (this.reversed) {
      this.units[0] = this.setStateUrl(CommanderSpawn)
    }
  }
}

