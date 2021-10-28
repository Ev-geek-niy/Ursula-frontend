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
        <li><span>BRUH</span></li>
        <li><span class="lobby__players-waiting">waiting...</span></li>
      </ul>

      <form action="">
        <router-link to="/game">
          <button type="submit" >Start the game</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { MenuButton } from '@/components/index';
import CloseButton from '@/components/CloseButton';

export default {
  name: 'Lobby',
  components: {CloseButton, MenuButton},
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
    padding-top: 217px;
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
    font-size: 30px;
    line-height: 74px;
    list-style-type: none;

    li {
      padding-left: 27px;
      margin-bottom: 14px;
      height: 74px;
      background: #FFFFFF;
      border-radius: 5px;
    }

    &-waiting {
      color: #000000;
      opacity: 0.3;
    }
  }
}
</style>
