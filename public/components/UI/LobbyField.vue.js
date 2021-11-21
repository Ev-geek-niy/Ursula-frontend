const LockerIcon = './assets/img/Icons/locker.png'

Vue.component('LobbyField', {
  template: `
  <div class="lobbyField" @click="handleClick">
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
      LockerIcon
    }
  },
  props: {
    privatised: {
      type: Boolean
    },
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
