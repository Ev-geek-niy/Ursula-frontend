Vue.component('CreateLobby', {
  template: `
  <div class="create__modal">
    <CloseButton :on-click="handleCloseCreateModal"/>
    <div class="create__modal-form">
      <MenuButton class="create__modal-btn">Public</MenuButton>
      <MenuButton class="create__modal-btn">Private</MenuButton>
      <button id="createLobby" @click="submit">Create</button>
    </div>
  </div>
  `,
  data() {
    return {
      selected: null,
    }
  },
  methods: {
    handleCloseCreateModal() {
      this.closeCreateLobby()
    },
    async submit() {
      await this.$store.dispatch('joinChat')
      this.moveToLobby()
    }
  },
  props: {
    closeCreateLobby: {
      type: Function,
      required: true
    },
    moveToLobby: {
      type: Function
    }
  }
})
