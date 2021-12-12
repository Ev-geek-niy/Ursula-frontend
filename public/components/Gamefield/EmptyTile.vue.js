Vue.component('EmptyTile', {
  template: `
  <div class="unit__block" @click="handleClick">
    <div class="tile" :class="emptyTileClass">
    </div>
  </div>
  `,
  computed: {
    emptyTileClass() {
      return {
        selectedFriendTile: this.selectedFriendTile === this.index,
      }
    },
  },
  props: ['mirror', 'index', 'selectedFriendTile', 'selectedTile', 'onClick'],
  methods: {
    changeState(state) {
      this.currentState = state + '?a=' + Math.random();
    },
    handleClick() {
      this.onClick()
    }
  },
  created() {
    this.currentState = this.Spawn + '?a=' + Math.random();
  }
})
