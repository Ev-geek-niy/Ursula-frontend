const trooperCard = '/assets/img/Cards/trooper_card.gif'
const healCard = '/assets/img/Cards/heal_card.gif'
const offlineCard = '/assets/img/Cards/offline_card.gif'


Vue.component('Card', {
  template: `
  <div class="card" :class="selected" @click="handleClick">
    <img
      :src="cardUrl[id]"
      alt="card">
  </div>
  `,
  data() {
    return {
      cardUrl: {
        undefined: offlineCard,
        5: healCard,
        9: trooperCard
      }
    }
  },
  computed: {
    selected() {
      return {
        selectedCard: this.selectedCard === this.id
      }
    },
  },
  props: ['onClick', 'selectedCard', 'id'],
  methods: {
    handleClick() {
      this.onClick()
    }
  }
})
