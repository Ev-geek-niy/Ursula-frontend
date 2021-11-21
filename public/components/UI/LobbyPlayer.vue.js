Vue.component('LobbyPlayer', {
  template: `
  <li v-if="player" class="lobby__modal__player">
    <img class="lobby__modal__player__img" src="assets/img/Trooper/Trooper.png" alt="player1">
    <div class="lobby__modal__player__descr">
      <p class="lobby__modal__player__nickname">{{player.name}}</p>
      <p>lvl: {{player.lvl}}</p>
      <p>Wins: {{player.wins}}</p>
      <p>Losses: {{player.losses}}</p>    
    </div>
  </li>
  <li v-else>
    <p class="lobby__modal__players-waiting">waiting...</p>
  </li>
  `,
  props: {
    player: {
      type: Object
    }
  }
})
