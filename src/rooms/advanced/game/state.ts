import {calculateObjectSize} from "bson"
import {Mosx, mx} from "mosx"

@mx.Object
export class Player {
  @mx public hp: number
  @mx public mana: number
  @mx public username: string

  constructor(hp: number = 100, mana: number = 3) {
    this.hp = hp
    this.mana = mana
  }
}

@mx.Object
export class GameState {
  @mx public players = new Map<string, Player>()
  @mx public gameState: string
  @mx public currentTurn: string
  @mx public looser: string

  playerIDs = { A: ' ', B: ' ' }

  constructor() {
    this.gameState = "pre"
    this.currentTurn = ""
    this.looser = ""
  }

  public createPlayer(id: string) {
    if (this.players.size == 0) {
      this.players.set(id, new Player())
      this.playerIDs.A = id
    } else {
      this.players.set(id, new Player())
      this.playerIDs.B = id
    }

  }

  public removePlayer(id: string) {
    this.players.delete(id)
  }

  public executeCardEffect(playerID: string, cardID: string) {
    console.log("TURN: " + this.currentTurn + " player: " + playerID)
    console.log("BEFORE")
    this.players.forEach((player) => {
      console.log("HP: " + player.hp + "Mana: " + player.mana)
    })

    if (this.currentTurn === playerID) {
      let source = ''
      let target = ''
      if (playerID === this.playerIDs.A) {
        source = this.playerIDs.A
        target = this.playerIDs.B
      } else {
        source = this.playerIDs.B
        target = this.playerIDs.A
      }
      const targetPlayer = this.players.get(target)
      const sourcePlayer = this.players.get(source)
      if (!targetPlayer) {
        return
      }
      if (!sourcePlayer) {
        return
      }

      // получаем из дб инфу о карте
      if (cardID == '1') {
        console.log('targetPlayer before: ' + targetPlayer.hp)
        targetPlayer.hp -= 10
        sourcePlayer.mana -= 2
        console.log('targetPlayer after: ' + targetPlayer.hp)
      }
      if (cardID == '2') {
        console.log('sourcePlayer before: ' + sourcePlayer.hp)
        sourcePlayer.hp += 10
        sourcePlayer.mana -= 1
        console.log('sourcePlayer after: ' + sourcePlayer.hp)
      }

      if (targetPlayer.hp <= 0) {
        this.looser = target
      }

      if (sourcePlayer.mana <= 0) {
        this.changeTurn()
      }

    }
    console.log("AFTER")
    this.players.forEach((player) => {
      console.log("HP: " + player.hp + "Mana: " + player.mana)
    })
  }

  public changeTurn() {
    this.players.forEach((player) => {
      player.mana = 3
    })

    if (this.gameState === "game") {
      if (this.currentTurn.length == 0) {
        this.currentTurn = this.playerIDs.A
      }

      if (this.currentTurn === this.playerIDs.A) {
        // turnEndHandler(this.playerA.id)
        this.currentTurn = this.playerIDs.B
        // turnStartHandler(this.playerB.id)
      } else if (this.currentTurn === this.playerIDs.B) {
        // turnEndHandler(this.playerB.id)
        this.currentTurn = this.playerIDs.A
        // turnStartHandler(this.playerA.id)
      }
    }

    return this.currentTurn
  }
}
