var Gamefield =  {
  template: `
  <div class="game__container">
    <div class="top">
      <div class="angle angle-left"></div>
      <div class="angle angle-right"></div>
      Menu
    </div>
    <div class="battlefield">
      <Decorations/>
      <div class="player-field">
        <div class="player1">
          <Unit data-pos="1"/>
          <Unit data-pos="2"/>
          <Unit data-pos="3"/>
        </div>
        <div class="player2">
          <Unit data-pos="4" mirror/>
          <Unit data-pos="5" mirror/>
          <Unit data-pos="6" mirror/>
        </div>
      </div>
    </div>
    <div class="table">
      <div class="hand">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div class="table__status">
        <DeckStatus>Cards left</DeckStatus>
        <DeckStatus>Discards</DeckStatus>
      </div>
<!--      <div class="endturn">End turn</div>-->
    </div>
  </div>
  `
}
