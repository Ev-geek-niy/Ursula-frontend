<template>
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
        <MenuButton
          v-for="(lobby, index) in lobbies"
          class="modal__list-item"
          :class="{'modal__list-item-select': selected === index}"
          @click="onChangeLobby(index)"
        >
          {{ lobby }}
        </MenuButton>
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
</template>

<script>
import CloseButton from '@/components/UI/CloseButton';
import { MenuButton, CreateLobby } from '@/components';

export default {
  name: 'Modal',
  data() {
    return {
      selected: 0,
      lobbies: ['CAKESNIFFERS', 'BRUH', 'BOSS OF THE GYM', 'FIGHT CLUB', 'HELLO UGLIES']
    }
  },
  components: {CreateLobby, MenuButton, CloseButton},
  methods: {
    handleCloseModal() {
      this.onCloseModal();
    },
    onChangeLobby(index) {
      this.selected = index
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
}
</script>

<style lang="scss" scoped>
.close {
  position: absolute;
  top: 0;
  left: 0;
}

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
    padding: 65px 0;
    width: 737px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
  }

  &__btn {
    width: 344px;
    height: 76px;
    font-size: 30px;
    line-height: 76px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    height: 60%;
    overflow: auto;

    &-item {
      padding-left: 27px;
      margin-bottom: 14px;
      height: 76px;
      width: 100%;
      font-size: 30px;
      line-height: 76px;
      list-style-type: none;
      background-color: #FFFFFF;
      text-align: left;

      &:last-child {
        margin-bottom: 0;
      }

      &-select {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>
