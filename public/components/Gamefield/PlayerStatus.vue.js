const pic = 'assets/img/Starege.png';

Vue.component('PlayerStatus', {
  template: `
  <div :class="{'player-status-1': !mirror, 'player-status-2': mirror}">
    <div class="player-status__img">
      <img :src="pic" alt="Starege">
    </div>
    <div class="player-status__descr">
      <span><slot></slot></span>
      <span v-if="currentTurn === you">Your turn</span>
    </div>
  </div>
  `,
  data() {
    return {
      pic
    }
  },
  props: ['mirror', 'currentTurn', 'you']
})
