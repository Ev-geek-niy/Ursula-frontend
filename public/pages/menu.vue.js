var Menu = {
  template: `
  <div class="menu">
    <div class="menu__container">
      <div class="menu__wrapper">
        <Hero change/>

        <div class="sidemenu">
          <div class="sidemenu__wrapper">
            <MenuButton :on-click="showModal">
              Find a game
            </MenuButton>
            <MenuButton>
              Game manual
            </MenuButton>
            <router-link to="/change">
              <MenuButton>Setting</MenuButton>
            </router-link>
            <MenuButton>Log out</MenuButton>
          </div>
        </div>

      </div>
      <div>
        <div v-if="show || join" class="hide" :class="{'z-2': create}"></div>
        <FindGame
          v-if="show"
          :onCloseModal="closeModal"
          :showCreateLobby="showCreateLobby"
          :joinLobby="joinLobby"
        />
        <CreateLobby
          v-if="create"
          :closeCreateLobby="closeCreateLobby"/>
        <Lobby
          v-if="join"
          :quitLobby="quitLobby"
        />
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      show: false,
      create: false,
      join: false
    }
  },
  methods: {
    test() {
      console.log('test')
    },
    showModal() {
      this.show = true
    },
    closeModal() {
      this.show = false
    },
    showCreateLobby() {
      this.create = true
    },
    closeCreateLobby() {
      this.create = false
    },
    joinLobby() {
      this.join = true
      this.show = false
    },
    quitLobby() {
      this.join = false
      this.show = true
    }
  }
}
