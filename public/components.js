// Lobby Field
// import LockerIcon from './assets/img/cross.png'
// Close Button
// import CloseButtonImg from '~@/assets/img/cross.png'
// Hero
// import Trooper from '@/assets/img/Trooper/Trooper.png'
// import Starege from '@/assets/img/Starege.png'

// Unit State
const Calm = 'assets/img/Trooper/Trooper.png'
const Death = 'assets/img/Trooper/Death.gif'
const Shooting = 'assets/img/Trooper/Shooting.gif'
const CoverShooting = 'assets/img/Trooper/CoverShooting.gif'
const Hit = 'assets/img/Trooper/Hit.gif'
const ShootingAndCovering = 'assets/img/Trooper/Shooting-and-covering.gif'
const Spawn = 'assets/img/Trooper/Teleportation.gif'

//Decorations
const Bag = 'assets/img/Decorations/bag.png'
const ServerImg = 'assets/img/Decorations/server.png'
const BagDark = 'assets/img/Decorations/bag_dark.png'
const Supply = 'assets/img/Decorations/supply.png'
const SupplyRotated = 'assets/img/Decorations/supply_rotated.png'
const Barrel = 'assets/img/Decorations/barrel.png'
const Box = 'assets/img/Decorations/box.png'
const HalfBox = 'assets/img/Decorations/halfbox.png'
const Car = 'assets/img/Decorations/car.png'
const Bags = 'assets/img/Decorations/bags1.png'
const BarrelGrey = 'assets/img/Decorations/barrel_gey.png'


Vue.component('MenuButton', {
  template: `
  <div class="button" @click="handleClick">
    <slot></slot>
  </div>
  `,
  props: {
    onClick: {
      type: Function,
    }
  },
  methods: {
    handleClick() {
      this.onClick()
    }
  }
})

Vue.component('LobbyField', {
  template: `
  <div class="lobbyField">
    <img
      v-if="privatised"
      class="lobbyField__img"
      src="assets/img/Icons/locker.png"
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
    <img src="assets/img/cross.png" alt="cross">
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
      <img class="profile" src="./assets/img/Starege.png" alt="Avatar">
      <div class="hero-descr">
        <h2>Username</h2>
        <h3>Level 666</h3>
        <div class="hero-exp">
          <span>200/500</span></div>
      </div>
    </div>
    <div class="hero-character">
      <img class="hero-img" src="./assets/img/Trooper/Trooper.png" alt="Hero Image">
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
  <div class="find__modal">
    <div class="find__modal__wrapper">
      <div class="find__modal__btns">
        <div @click="handleJoinLobby">
          <MenuButton class="find__modal__btn">
            Join the game
          </MenuButton>
        </div>
        <div @click="handleCreateLobby">
          <MenuButton class="find__modal__btn">
            Create a game
          </MenuButton>
        </div>
      </div>

      <div class="find__modal__list">
        <div @click="onChangeLobby(index)">
          <LobbyField
            v-for="({name, privatised}, index) in lobbies"
            class="find__modal__list-item"
            :class="{'find__modal__list-item-select': selected === index}"
            :privatised="privatised"
            :on-click="onChangeLobby(index)"
          >
          {{ name }}
          </LobbyField>
        </div>
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

Vue.component('CreateLobby', {
  template: `
  <div class="create__modal">
    <CloseButton :on-click="handleCloseCreateModal"/>
    <form action="#" method="post" class="create__modal-form">
      <MenuButton class="create__modal-btn">Public</MenuButton>
      <MenuButton class="create__modal-btn">Private</MenuButton>
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

Vue.component('Lobby', {
  template: `
  <div class="lobby__modal">
    <CloseButton :on-click="handleQuitLobby"/>
    <div class="lobby__modal__wrapper">
      <div class="lobby__modal__descr">
        <p class="lobby__modal__title">Fight Club</p>
        <p>Type: Private</p>
        <p>Password: 12345</p>
      </div>

      <ul class="lobby__modal__players">
        <li class="lobby__modal__player">
          <img class="lobby__modal__player__img" src="assets/img/Trooper/Trooper.png" alt="player1">
          <div class="lobby__modal__player__descr">
            <p class="lobby__modal__player__nickname">Boss of the gym</p>
            <p>lvl: 3</p>
            <p>Wins: 12</p>
            <p>Losses: 7</p>
          </div>
        </li>
        <li>
          <p class="lobby__modal__players-waiting">waiting...</p>
        </li>
      </ul>

      <form action="">
        <router-link to="/game">
          <button type="submit">Start the game</button>
        </router-link>
      </form>
    </div>
  </div>
  `,
  data() {
    return {
      // Trooper
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
    }
  }
})


// GAMEFIELD

Vue.component('Card', {
  template: `
  <img
    class="card"
    src="./assets/img/Cards/newCard.png"
    alt="card">
  `
})

Vue.component('DeckStatus', {
  template: `
  <div class="deck">
    <p>
      <slot></slot>
    </p>
    <div class="deck__wrapper">
      <div
        v-for="i in deck"
        :class="{'available': i.status, 'missing': !i.status}"
      >
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      deck: [{status: true}, {status: true}, {status: true}, {status: true}, {status: true},
        {status: true}, {status: true}, {status: true}, {status: true}, {status: true},
        {status: false}, {status: false}, {status: false}, {status: false}, {status: false}
      ]
    }
  }
})


Vue.component('Unit', {
  template: `
  <div class="unit">
    <img :class="{'mirror': mirror}" :src="currentState" alt="Soldier">
    <div class="hp"></div>
  </div>
  `,
  data() {
    return {
      Calm,
      Death,
      Shooting,
      CoverShooting,
      Hit,
      Spawn,
      ShootingAndCovering,
      currentState: Calm
    }
  },
  props: {
    mirror: {
      type: Boolean,
    }
  },
  methods: {
    changeState(state) {
      this.currentState = state
    }
  },
})

Vue.component('Decorations', {
  template: `
  <div>
    <div class="servers">
      <img :src="ServerImg" alt="server">
      <img :src="ServerImg" alt="server">
    </div>
  
    <div class="bags">
      <img id="bag1" :src="BagDark" alt="Bag dark">
      <img id="bag2" :src="Bag" alt="Bag">
      <img id="bag3" :src="Bag" alt="Bag">
    </div>
  
    <div class="supplies">
      <img id="sup1" :src="SupplyRotated" alt="supply rotated">
      <img id="sup2" :src="SupplyRotated" alt="supply rotated">
      <img id="sup3" :src="Supply" alt="supply">
      <img id="sup4" :src="Supply" alt="supply">
    </div>
  
    <div class="barrels">
      <img id="bar1" :src="Barrel" alt="barrel">
      <img id="bar2" :src="Barrel" alt="barrel">
      <img id="bar3" :src="Barrel" alt="barrel">
      <img id="bar4" :src="Barrel" alt="barrel">
      <img id="bar5" :src="Barrel" alt="barrel">
    </div>
  
    <div class="boxes">
      <img id="box1" :src="HalfBox" alt="box">
      <img id="box2" :src="HalfBox" alt="box">
      <img id="box3" :src="Box" alt="box">
      <img id="box4" :src="Box" alt="box">
      <img id="box5" :src="Box" alt="box">
      <img id="box6" :src="HalfBox" alt="box">
    </div>
  
    <div class="bags">
      <img id="bags1" :src="Bags" alt="bags">
      <img id="bags2" :src="Bags" alt="bags">
    </div>
  
    <div class="car">
      <img id="car" :src="Car" alt="car">
    </div>
  
    <div class="barrels_grey">
      <img id="barg1" :src="BarrelGrey" alt="barrel grey">
      <img id="barg2" :src="BarrelGrey" alt="barrel grey">
      <img id="barg3" :src="BarrelGrey" alt="barrel grey">
    </div>
  </div>
  `,
  data() {
    return {
     ServerImg, Bag, BagDark, Supply, SupplyRotated, Barrel, Box, HalfBox, Car, Bags, BarrelGrey
    }
  }
})
