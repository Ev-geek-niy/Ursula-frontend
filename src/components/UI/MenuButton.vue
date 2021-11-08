<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MenuButton'
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 100px;
  background-color: #FFFFFF;
  transition: all 0.1s ease;
  cursor: pointer;
  text-align: center;
  font-size: 50px;
  line-height: 100px;
  user-select: none;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
