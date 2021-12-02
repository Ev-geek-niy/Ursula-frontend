Vue.component('FindGame', {
  template: `
  <div class="find__modal">
    <div class="find__modal__wrapper">
      <div class="find__modal__btns">
        <MenuButton class="find__modal__btn" :on-click="() => handleJoinLobby(selected)">
          Join the game
        </MenuButton>
        <MenuButton class="find__modal__btn" :on-click="handleCreateLobby">
          Create a game
        </MenuButton>
      </div>

      <div class="find__modal__list">
          <LobbyField
            v-for="(room, index) in rooms"
            :key="index"
            class="find__modal__list-item"
            :class="{'find__modal__list-item-select': selected === room.id}"
            :on-click="() => onChangeLobby(room.id)"
            :privatised="room.locked"
          >
          {{ room.id }}
          </LobbyField>
      </div>

      <div class="find__modal__btns">
        <MenuButton :on-click="refresh" class="find__modal__btn">
          Refresh
        </MenuButton>
          <MenuButton
            :on-click="handleCloseModal"
            class="find__modal__btn"
          >
            Back
          </MenuButton>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      selected: null,
      // lobbies: [
      //   {name: 'CAKE', privatised: true},
      //   {name: 'BRUH', privatised: false},
      //   {name: 'BOSS OF THE GYM', privatised: false},
      //   {name: 'FIGHT CLUB', privatised: true},
      //   {name: 'HELLO UGLIES', privatised: false}]
    }
  },
  computed: {
    rooms() {
      return this.$store.getters.rooms
    }
  },
  methods: {
    handleCloseModal() {
      this.onCloseModal();
    },
    onChangeLobby(roomID) {
      this.selected = roomID
      console.log(this.selected)
    },
    handleCreateLobby() {
      this.showCreateLobby()
    },
    async handleJoinLobby(roomID) {
      await this.$store.dispatch('Join', roomID)
      await this.joinLobby()
    },
    async refresh() {
      await this.$store.dispatch('Rooms')
    }
  },
  props: {
    onCloseModal: {
      type: Function,
      required: true
    },
    showCreateLobby: {
      type: Function,
      required: true
    },
    joinLobby: {
      type: Function,
      required: true
    }
  }
})
