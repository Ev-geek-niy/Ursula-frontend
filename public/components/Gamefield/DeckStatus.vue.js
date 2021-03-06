Vue.component('DeckStatus', {
  template: `
  <div class="deck">
    <p>
      <slot></slot>
    </p>
    <div class="deck__wrapper">
      <div
        v-for="(i, index) in deck"
        :key="index + 'deck'"
        class="available"
      >
      </div>
      <div
        v-for="(x, index) in missing" 
        :key="index + 'missing'"
        class="missing">
      </div>
    </div>
  </div>
  `,
  props: ['deck', 'missing'],
})
