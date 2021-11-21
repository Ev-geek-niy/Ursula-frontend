Vue.component('Lobby', {
  template: `
  <div class="lobby__modal">
    <CloseButton :on-click="handleQuitLobby"/>
    <div class="lobby__modal__wrapper">
      <div class="lobby__modal__descr">
        <p class="lobby__modal__title">Fight Club</p>
        <p>Type: Private</p>
        <p>Password: 12345</p>
      </div>

      <ul class="lobby__modal__players">
        <li class="lobby__modal__player">
          <img class="lobby__modal__player__img" src="assets/img/Trooper/Trooper.png" alt="player1">
          <div class="lobby__modal__player__descr">
            <p class="lobby__modal__player__nickname">Boss of the gym</p>
            <p>lvl: 3</p>
            <p>Wins: 12</p>
            <p>Losses: 7</p>
          </div>
        </li>
        <li>
          <p class="lobby__modal__players-waiting">waiting...</p>
        </li>
      </ul>

      <form action="">
        <router-link to="/game">
          <button type="submit">Start the game</button>
        </router-link>
      </form>
    </div>
  </div>
  `,
  data() {
    return {
      // Trooper
    }
  },
  props: {
    quitLobby: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleQuitLobby() {
      this.quitLobby()
    }
  }
})
