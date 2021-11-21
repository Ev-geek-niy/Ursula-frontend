const CloseButtonImg = './assets/img/cross.png'

Vue.component('CloseButton', {
  template: `
  <div class="closeButton" @click="handleClick">
    <img :src="CloseButtonImg" alt="cross">
  </div>
  `,
  data() {
    return {
      CloseButtonImg
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
