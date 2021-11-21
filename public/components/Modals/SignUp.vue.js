Vue.component('SignUp', {
  template: `
  <div class="signUp">
    <CloseButton :on-click="handleClick"/>
    <input v-model="username" type="text" name="username" id="username" placeholder="username">
    {{ error }}
    <input type="password" name="password" id="password" placeholder="password">
    {{ error }}
    <button @click="sign">Sign up</button>
  </div>
  `,
  data() {
    return {
      username: ''
    }
  },
  methods: {
    handleClick() {
      this.close()
    },
    async sign() {
      try {
        await this.$store.dispatch('auth', {username: this.username})
        router.push({path: '/menu'})
      } catch (e) {
        console.log(e)
      }
    }
  },
  props: {
    close: {
      type: Function,
      required: true
    }
  }
})
