const pic = 'assets/img/Starege.png';

Vue.component('PlayerStatus', {
  template: `
  <div :class="{'player-status-1': !mirror, 'player-status-2': mirror}">
    <div class="player-status__img">
      <img :src="pic" alt="Starege">
    </div>
    <span><slot></slot></span>
  </div>
  `,
  data() {
    return {
      pic
    }
  },
  props: {
    mirror: {
      type: Boolean,
    }
  }
})
