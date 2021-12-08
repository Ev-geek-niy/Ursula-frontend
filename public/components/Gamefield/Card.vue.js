const trooperCard = '/assets/img/Cards/trooper_card.gif'


Vue.component('Card', {
  template: `
  <div class="card" :class="selected" @click="handleClick">
    <img
      :src="cardImg"
      alt="card">
  </div>
  `,
  data() {
    return {
      cardImg: trooperCard
    }
  },
  computed: {
    selected() {
      return {
        selectedCard: this.selectedCard === this.id
      }
    }
  },
  props: ['onClick', 'selectedCard', 'id'],
  methods: {
    handleClick() {
      this.onClick()
    }
  }
})
