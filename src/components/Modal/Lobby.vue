<template>
  <div class="modal">
    <CloseButton :on-click="handleQuitLobby"/>
    <div class="modal__wrapper">
      <div class="lobby__descr">
        <p class="lobby__title">Fight Club</p>
        <p>Type: Private</p>
        <p>Password: 12345</p>
      </div>

      <ul class="lobby__players">
        <li class="player">
          <img class="player__img" :src="Trooper" alt="player1">
          <div class="player__descr">
            <p class="player__nickname">Boss of the gym</p>
            <p>lvl: 3</p>
            <p>Wins: 12</p>
            <p>Losses: 7</p>
          </div>
        </li>
        <li>
          <p class="lobby__players-waiting">waiting...</p>
        </li>
      </ul>

      <form action="">
        <router-link to="/game">
          <button type="submit">Start the game</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import Trooper from '@/assets/img/Trooper/Trooper.png'

import { MenuButton, CloseButton } from '@/components/UI';


export default {
  name: 'Lobby',
  components: {CloseButton, MenuButton},
  data() {
    return {
      Trooper
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
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: calc(100vh - 100px);
  width: calc(100vw - 600px);
  background-color: #C4C4C4;
  border: 5px solid #626262;
  z-index: 1;

  &__wrapper {
    padding-top: 50px;
    width: 737px;
    height: 100%;
    margin: 0 auto;
  }

  form {
    button {
      height: 94px;
      border-radius: 5px;
      font-family: 'Visitor', serif;
      font-size: 30px;
      border: none;
      width: 100%;
      background-color: #626262;
      color: #FFFFFF;
      transition: all 0.1s ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: green;
      }
    }
  }
}

.lobby {
  &__title {
    font-size: 70px;
  }

  &__descr {
    font-size: 30px;
    text-align: center;
  }

  &__players {
    list-style-type: none;

    li {
      padding-left: 27px;
      margin-bottom: 34px;
      height: 200px;
      background: #FFFFFF;
      border-radius: 5px;
    }

    &-waiting {
      font-size: 40px;
      line-height: 200px;
      text-align: center;
      color: #000000;
      opacity: 0.3;
    }
  }
}

.player {
  width: 100%;
  padding: 20px 0;

  &__img {
    float: left;
    width: 103.65px;
    height: 160px;
  }

  &__descr {
    height: 100%;
    padding-left: 53px;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &__nickname {
    font-size: 40px;
  }
}
</style>
