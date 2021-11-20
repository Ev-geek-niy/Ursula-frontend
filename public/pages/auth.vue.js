var Auth = {
  template: `
  <div class="auth">
    <div class="auth__container">
      <div class="auth__wrapper">
        <router-link :to="'/menu'">
          <MenuButton>
            Sign up
          </MenuButton>
        </router-link>
        <router-link to="">
          <MenuButton>
            Log In
          </MenuButton>
        </router-link>
      </div>
    </div>
  </div>
  `,
};
