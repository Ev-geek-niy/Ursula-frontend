var Menu = {
  template: `
  <div class="menu">
    <div class="menu__container">
      <div class="menu__wrapper">
        <Hero change/>

        <div class="sidemenu">
          <div class="sidemenu__wrapper">
            <MenuButton :on-click="switchModal">
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
          :onCloseModal="switchModal"
          :showCreateLobby="switchCreateLobby"
          :joinLobby="switchLobby"
        />
        <CreateLobby
          v-if="create"
          :closeCreateLobby="switchCreateLobby"
          :moveToLobby="moveToLobby"/>
        <Lobby
          v-if="join"
          :quitLobby="switchLobby"
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
    switchModal() {
      this.show = !this.show
    },
    switchCreateLobby() {
      this.create = !this.create
    },
    switchLobby() {
      this.join = !this.join
      this.show = !this.show
    },
    moveToLobby() {
      this.create = !this.create
      this.join = !this.join
    }
  }
}
