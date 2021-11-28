var Auth = {
  template: `
  <div class="auth">
    <div class="auth__container">
      <div v-if="!sign && !login" class="auth__wrapper">
            <MenuButton :on-click="switchSign">
              Sign up
            </MenuButton>
          <MenuButton :on-click="switchLogin">
            Log In
          </MenuButton>
      </div>
      <SignUp v-else-if="sign" :close="switchSign"/>
      <Login v-else-if="login" :close="switchLogin"/>
    </div>
  </div>
  `,
  data() {
    return {
      sign: false,
      login: false
    }
  },
  methods: {
    switchSign() {
      this.sign = !this.sign
    },
    switchLogin() {
      this.login = !this.login
    }
  }
};
