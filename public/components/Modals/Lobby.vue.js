Vue.component('Lobby', {
  template: `
  <div class="lobby__modal">
    <CloseButton :on-click="handleQuitLobby"/>
    <div class="lobby__modal__wrapper">
      <div class="lobby__modal__descr">
        <p class="lobby__modal__title">Fight Club</p>
        <p>ID: {{roomID}}</p>
      </div>

      <ul class="lobby__modal__players">
        <lobby-player v-for="(player, index) in users" :key="index" :player="index"/>
      </ul>
        <button class="lobby__modal__btn" @click="start">Start the game</button>
    </div>
  </div>
  `,
  data() {
    return {}
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
