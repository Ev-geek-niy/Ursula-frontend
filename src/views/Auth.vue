<template>
  <div class="auth">
    <div class="container">
      <div class="wrapper">
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
</template>

<script>
import { MenuButton } from '@/components';

export default ({
    name: 'Auth',
    components: {MenuButton}
  }
)
</script>

<style lang="scss" scoped>
.auth {
  background: url("~@/assets/img/Background_Auth.png");
}

.container {
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.wrapper {
  height: 230px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

</style>
