var Auth = {
  template: `
  <div class="auth">
    <div class="auth__container">
      <div class="auth__wrapper">
<!--        <router-link :to="'/menu'">-->
            <MenuButton :on-click="auth">
              Sign up
            </MenuButton>
<!--        </router-link>-->
        <router-link to="">
          <MenuButton>
            Log In
          </MenuButton>
        </router-link>
      </div>
    </div>
  </div>
  `,
  methods: {
    test: function () {
      console.log('test')
    },
    async auth() {
      try {
        await this.$store.dispatch('auth', {username: 'Test Name'})
        router.push({path: '/menu'})
      } catch (e) {
        console.log(e)
      }
    }
  }
};
