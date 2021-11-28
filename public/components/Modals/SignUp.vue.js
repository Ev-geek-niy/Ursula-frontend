Vue.component('SignUp', {
  template: `
  <div class="signUp">
    <h1>Sign Up</h1>
    <CloseButton :on-click="handleClick"/>
    <input v-model="username" type="text" name="username" id="username" placeholder="username">
    <p>{{ errorMessage.name }}</p>
    <input type="password" name="password" id="password" placeholder="password">
    <p>{{ errorMessage.pass }}</p>
    <button @click="sign">Enter</button>
  </div>
  `,
  data() {
    return {
      username: '',
      errorMessage: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    handleClick() {
      this.close()
    },
    async sign() {
      if (this.username === '') {
        this.errorMessage.name = 'Empty username'
      } else {
        await this.$store.dispatch('auth', {username: this.username})
        await this.$store.dispatch('Rooms')
        router.push({path: '/menu'})
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
