const airStrikeCard = '/assets/img/Cards/air_strike_card.gif'
const armorCard = '/assets/img/Cards/armor_card.gif'
const grenadeCard = '/assets/img/Cards/grenade_card.gif'
const healCard = '/assets/img/Cards/heal_card.gif'
const heavyTrooperCard = '/assets/img/Cards/heavy_trooper_card.gif'
const offlineCard = '/assets/img/Cards/offline_card.gif'
const shieldCard = '/assets/img/Cards/shield_card.gif'
const stunGrenadeCard = '/assets/img/Cards/stun_grenade_card.gif'
const trooperCard = '/assets/img/Cards/trooper_card.gif'


Vue.component('Card', {
  template: `
  <div class="card" :class="selected" @click="handleClick">
    <img
      :src="cardUrl[id]"
      :alt="id">
  </div>
  `,
  data() {
    return {
      cardUrl: {
        undefined: offlineCard,
        1: 1,
        2: 1,
        3: grenadeCard,
        4: airStrikeCard,
        5: healCard,
        6: stunGrenadeCard,
        7: shieldCard,
        8: armorCard,
        9: trooperCard,
        10: heavyTrooperCard
      }
    }
  },
  computed: {
    selected() {
      return {
        selectedCard: this.selectedCard === this.index
      }
    },
  },
  props: ['onClick', 'selectedCard', 'id', 'index'],
  methods: {
    handleClick() {
      this.onClick()
    }
  }
})
