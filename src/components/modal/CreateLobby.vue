<template>
  <div class="modal__create">
    <CloseButton :on-click="handleCloseCreateModal"/>
    <form action="#" method="post" class="modal__create-form">
      <div>
        <input id="public" type="radio" name="lobby" value="public">
        <label for="public">public</label>
      </div>
      <div>
        <input id="private" type="radio" name="lobby" value="private">
        <label for="private">private</label>
      </div>
      <div>
        <input type="text" placeholder="name">
        <input type="text" placeholder="password">
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>
<script>
import CloseButton from '@/components/UI/CloseButton';

export default {
  name: 'CreateLobby',
  components: {CloseButton},
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
    height: 450px;
    background-color: #C4C4C4;
    border: 5px solid #626262;

    &-form {
      padding: 57px;

      * {
        font-size: 30px;
        font-family: 'Visitor', serif;
      }

      div {
        input[type="radio"] {
          position: relative;
          cursor: pointer;

          &:before {
            content: "";
            display: block;
            position: absolute;
            width: 19px;
            height: 19px;
            top: -3px;
            left: 0;
            border: 2px solid #626262;
            border-radius: 5px;
            background-color: #FFFFFF;
          }

          &:checked:after {
            content: "";
            display: block;
            width: 5px;
            height: 10px;
            border: solid black;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            position: absolute;
            top: 0;
            left: 7px;
          }
        }

        label {
          margin-left: 16px;
        }
      }

      input[type="text"] {
        margin-top: 24px;
        width: 100%;
        height: 70px;
        line-height: 70px;
        padding-left: 27px;
        outline: none;
        border-radius: 5px;
        border: 2px solid #FFFFFF;
        transition: all ease-in-out 0.4s;

        &:hover {
          border: 2px solid #626262;
        }
      }

      button {
        margin-top: 24px;
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
