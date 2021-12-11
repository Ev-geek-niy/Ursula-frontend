const lock = 'assets/img/Icons/locker.png'

Vue.component('Lobby', {
  template: `
  <div class="lobby__modal">
    <CloseButton :on-click="handleQuitLobby"/>
    <div class="lobby__modal__wrapper">
      <div class="lobby__modal__descr">
        <p class="lobby__modal__title">Fight Club</p>
        <p>ID: {{roomID}}</p>
        <img class="lobby__modal__lock" v-if="Object.keys(users).length === 2" :src="lock" alt="lock">
        <div v-else class="lobby__modal__lock"></div>
      </div>
       
      <ul class="lobby__modal__players">
        <lobby-player v-for="(player, index) in users" :key="index" :player="index"/>
      </ul>
        <button class="lobby__modal__btn" @click="start">Start the game</button>
    </div>
  </div>
  `,
  data() {
    return {
      lock
    }
  },
  computed: {
    roomID() {
      return this.$store.getters.room.id
    },
    users() {
      return this.$store.state.mosxStoreSync.players
    }
  },
  props: {
    quitLobby: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleQuitLobby() {
      this.quitLobby()
    },
    async getRooms() {
      await this.$store.dispatch('getRooms')
    },
    start() {
      router.push({path: '/game'})
    }
  }
})
