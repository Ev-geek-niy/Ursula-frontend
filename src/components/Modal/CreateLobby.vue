<template>
  <div class="modal__create">
    <CloseButton :on-click="handleCloseCreateModal"/>
    <form action="#" method="post" class="modal__create-form">
      <MenuButton class="modal__create-btn">Public</MenuButton>
      <MenuButton class="modal__create-btn">Private</MenuButton>
      <button type="submit">Create</button>
    </form>
  </div>
</template>
<script>
import { CloseButton, MenuButton } from '@/components/UI';

export default {
  name: 'CreateLobby',
  components: {CloseButton, MenuButton},
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
}
</script>
<style lang="scss" scoped>
.modal {
  &__create {
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 500px;
    height: 400px;
    background-color: #C4C4C4;
    border: 5px solid #626262;

    &-btn {
      height: 70px;
      margin-bottom: 24px;
      line-height: 70px;
    }

    &-form {
      padding-top: 97px;
      width: 390px;
      height: 230px;
      margin: 0 auto;

      * {
        font-size: 30px;
        font-family: 'Visitor', serif;
      }

      button {
        border: none;
        width: 100%;
        height: 45px;
        background-color: #626262;
        color: #FFFFFF;
      }
    }
  }
}

</style>
