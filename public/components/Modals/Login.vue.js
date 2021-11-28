Vue.component('Login', {
  template: `
  <div class="signUp">
    <h1>Log in</h1>
    <CloseButton :on-click="handleClick"/>
    <input type="text" name="username" id="username" placeholder="username">
    {{ error }}
    <input type="password" name="password" id="password" placeholder="password">
    {{ error }}
    <button>Enter</button>
  </div>
  `,
  methods: {
    handleClick() {
      this.close()
    }
  },
  props: {
    close: {
      type: Function,
      required: true
    }
  }
})
