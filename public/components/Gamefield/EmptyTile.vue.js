Vue.component('EmptyTile', {
  template: `
  <div class="unit__block" @click="handleClick">
    <div class="tile" :class="emptyTileClass">
      {{index}}
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
  props: {
    mirror: {
      type: Boolean,
    },
    index: {
      type: Number,
      required: true
    },
    selectedTile: {
      type: Number,
      required: true
    },
    selectedFriendTile: {
      type: Number,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
  },
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
