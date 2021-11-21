Vue.component('DeckStatus', {
  template: `
  <div class="deck">
    <p>
      <slot></slot>
    </p>
    <div class="deck__wrapper">
      <div
        v-for="i in deck"
        :class="{'available': i.status, 'missing': !i.status}"
      >
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      deck: [{status: true}, {status: true}, {status: true}, {status: true}, {status: true},
        {status: true}, {status: true}, {status: true}, {status: true}, {status: true},
        {status: false}, {status: false}, {status: false}, {status: false}, {status: false}
      ]
    }
  }
})
