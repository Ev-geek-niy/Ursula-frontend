Vue.component('ManaStatus', {
  template: `
  <div class="deck">
    <p>
      <slot></slot>
    </p>
    <div class="deck__wrapper">
      <div
        v-for="(i, index) in mana"
        :key="index + 'deck'"
        class="availableMana"
      >
      </div>
      <div
        v-for="(x, index) in wasted" 
        :key="index + 'missing'"
        class="missingMana">
      </div>
    </div>
  </div>
  `,
  props: ['mana'],
  computed: {
    wasted() {
      return 10 - this.mana
    }
  }
})
