Vue.component('CreateLobby', {
  template: `
  <div class="create__modal">
    <CloseButton :on-click="handleCloseCreateModal"/>
    <div class="create__modal-form">
      <p v-for="(text, index) in status" 
         :key="index"
         class="create__modal-btn"
         :class="{'create__modal-btn-selected' : selected === index}"
         @click="() => handleStatus(index)">
        {{text}}
      </p>
      <button id="createLobby" @click="submit">Create</button>
    </div>
  </div>
  `,
  data() {
    return {
      selected: null,
      status: ['Public', 'Private']
    }
  },
  methods: {
    handleCloseCreateModal() {
      this.closeCreateLobby()
    },
    async submit() {
      await this.$store.dispatch('createLobby', this.status[this.selected])
      this.moveToLobby()
    },
    handleStatus(index) {
      this.selected = index
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
