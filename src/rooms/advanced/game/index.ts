import { Room, Client } from "magx"
import { Mosx, SchemaSerializer } from "mosx"
import { GameState } from "./state"

export class GameRoom extends Room<GameState> {

  public createState(): any {
    // create state
    return new GameState()
  }

  public createPatchTracker(state: GameState) {
    // create state change tracker
    return Mosx.createTracker(state, { serializer: SchemaSerializer })
  }

  public onCreate(params: any) {
    console.log("GameRoom created!", params)
  }

  public onMessage(client: Client, type: string, data: any) {
    console.log(`GameRoom received message from ${client.id} with type: `, type, data)
    if(this.state.gameState === "game"){
      if (type === "executeCardEffect") {
        // todo получать target creature через положение (???)
        this.state.executeCardEffect(client.id, data.id, data.target)
      }
      if (type === "attack") {
        this.state.attack(data.source,data.target)
      }
    }
  }

  public onJoin(client: Client, params: any) {
    console.log(`Player ${client.id} joined`, params)
    this.state.createPlayer(client.id)

    if (this.clients.size >= 2) {
      this.lock()
      this.state.startGame()
    }
  }

  public onLeave(client: Client) {
      this.state.removePlayer(client.id)
  }

  public onClose() {
    console.log("GameRoom closed!")
  }
}
