Vue.component('FindGame', {
  template: `
  <div class="find__modal">
    <div class="find__modal__wrapper">
      <div class="find__modal__btns">
        <MenuButton class="find__modal__btn" :on-click="handleJoinLobby">
          Join the game
        </MenuButton>
        <MenuButton class="find__modal__btn" :on-click="handleCreateLobby">
          Create a game
        </MenuButton>
      </div>

      <div class="find__modal__list">
          <LobbyField
            v-for="({name, privatised}, index) in lobbies"
            :key="index"
            class="find__modal__list-item"
            :class="{'find__modal__list-item-select': selected === index}"
            :privatised="privatised"
            :on-click="() => onChangeLobby(index)"
          >
          {{ name }}
          </LobbyField>
      </div>

      <div class="find__modal__btns">
        <MenuButton class="find__modal__btn">
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
      selected: 0,
      lobbies: [
        {name: 'CAKE', privatised: true},
        {name: 'BRUH', privatised: false},
        {name: 'BOSS OF THE GYM', privatised: false},
        {name: 'FIGHT CLUB', privatised: true},
        {name: 'HELLO UGLIES', privatised: false}]
    }
  },
  methods: {
    handleCloseModal() {
      this.onCloseModal();
    },
    onChangeLobby(index) {
      this.selected = index
      console.log(this.selected)
    },
    handleCreateLobby() {
      this.showCreateLobby()
    },
    handleJoinLobby() {
      this.joinLobby()
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
