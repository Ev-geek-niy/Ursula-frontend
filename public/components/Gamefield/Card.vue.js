const trooperCard = '/assets/img/Cards/trooper_card.gif'


Vue.component('Card', {
  template: `
  <img
    class="card"
    :src="cardImg"
    alt="card">
  `,
  data() {
    return {
      cardImg: trooperCard
    }
  },
  props: {}
})
