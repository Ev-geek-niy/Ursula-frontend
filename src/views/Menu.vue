<template>
  <div class="main-menu">
    <div class="container">
      <div class="wrapper">
        <Hero change/>

        <div class="menu">
          <div class="menu-wrapper">
            <MenuButton
              @click="showModal"
            >
              Find a game
            </MenuButton>
            <MenuButton>Game manual</MenuButton>
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
</template>

<script>
import { Hero, MenuButton } from '@/components/UI'
import { FindGame, CreateLobby, Lobby, CreateLobbyNew } from '@/components/Modal';

export default {
  name: 'Menu',
  data() {
    return {
      show: false,
      create: false,
      join: false
    }
  },
  components: {MenuButton, Hero, FindGame, CreateLobby, Lobby},
  methods: {
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

</script>

<style lang="scss" scoped>
.main-menu {
  background: url("~@/assets/img/Backgrounds/Background_Menu.png") no-repeat;
  z-index: 0;
}

.hide {
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.7);
}

.z-2 {
  z-index: 2;
}

.container {
  width: calc(100vw - 55px);
  height: 100vh;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}

.menu {
  padding-top: 250px;

  &-wrapper {
    height: 586px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}

.heroimg {
  width: 400px;
  height: 577px;
  background-color: blue;
  margin: 0 auto;
}
</style>
