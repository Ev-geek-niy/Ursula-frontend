// Lobby Field
// import LockerIcon from '@/assets/img/Icons/locker 1.png'
// Close Button
// import CloseButtonImg from '~@/assets/img/cross.png'
// Hero
// import Trooper from '@/assets/img/Trooper/Trooper.png'
// import Starege from '@/assets/img/Starege.png'

Vue.component('MenuButton', {
  template: `
  <div class="button">
    <slot></slot>
  </div>
  `,
})

Vue.component('LobbyField', {
  template: `
  <div class="lobbyField">
    <img
      v-if="privatised"
      class="lobbyField__img"
      :src="LockerIcon"
      alt="lockerIcon"
    />
    <slot></slot>
  </div>
  `,
  data() {
    return {
      // LockerIcon
    }
  },
  props: {
    privatised: {
      type: Boolean
    }
  }
})

Vue.component('CloseButton', {
  template: `
  <div class="closeButton" @click="handleClick">
    <img :src="CloseButtonImg" alt="cross">
  </div>
  `,
  data() {
    return {
      // CloseButtonImg
    }
  },
  props: {
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.onClick()
    }
  }
})

Vue.component('Hero', {
  template: `
    <div class="hero">
    <div class="hero-wrapper">
      <img class="profile" :src="Starege" alt="Avatar">
      <div class="hero-descr">
        <h2>Username</h2>
        <h3>Level 666</h3>
        <div class="hero-exp">
          <span>200/500</span></div>
      </div>
    </div>
    <div class="hero-character">
      <img class="hero-img" :src="Trooper" alt="Hero Image">
      <router-link to="/change" v-if="change">
        <p class="hero__btn">
          Change my character
        </p>
      </router-link>
      <router-link to="/menu" v-else>
        <p class="hero__btn">
          Back
        </p>
      </router-link>
    </div>
  </div>
  `,
  data() {
    return {
      // Trooper,
      // Starege
    }
  },
  props: {
    change: {
      type: Boolean,
      required: true
    }
  }
})


//MODALS
Vue.component('FindGame', {
  template: `
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__btns">
        <MenuButton
          @click="handleJoinLobby"
          class="modal__btn">
          Join the game
        </MenuButton>
        <MenuButton
          @click="handleCreateLobby"
          class="modal__btn"
        >
          Create a game
        </MenuButton>
      </div>

      <div class="modal__list">
        <LobbyField
          v-for="({name, privatised}, index) in lobbies"
          class="modal__list-item"
          :class="{'modal__list-item-select': selected === index}"
          :privatised="privatised"
          @click="onChangeLobby(index)"
        >
          {{ name }}
        </LobbyField>
      </div>

      <div class="modal__btns">
        <MenuButton class="modal__btn">
          Refresh
        </MenuButton>
        <MenuButton
          class="modal__btn"
          @click="handleCloseModal"
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

Vue.component('CreateLobby', {
  template: `
  <div class="modal__create">
    <CloseButton :on-click="handleCloseCreateModal"/>
    <form action="#" method="post" class="modal__create-form">
      <MenuButton class="modal__create-btn">Public</MenuButton>
      <MenuButton class="modal__create-btn">Private</MenuButton>
      <button type="submit">Create</button>
    </form>
  </div>
  `,
  data() {
    return {
      selected: null,
    }
  },
  methods: {
    handleCloseCreateModal() {
      this.closeCreateLobby()
    }
  },
  props: {
    closeCreateLobby: {
      type: Function,
      required: true
    }
  }
})
