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
