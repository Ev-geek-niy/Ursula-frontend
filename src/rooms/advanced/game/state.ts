import {mx} from "mosx"

class Constants {
  static readonly MAX_MANA = 10
  static readonly STARTING_MANA = 1
  static readonly DEFAULT_WEAPON_DAMAGE = 2
  static readonly HAND_SIZE = 5
  static readonly COMMANDER_A_POSITION = 0
  static readonly COMMANDER_B_POSITION = 5
}

@mx.Object
export class Card {
  @mx public id: number
  @mx public name: string
  @mx public cost: number
  @mx public effect: string

  constructor(id: number, name: string, cost: number, effect: string) {
    this.id = id
    this.name = name
    this.cost = cost
    this.effect = effect
  }
}

let Cards = [
  new Card(0, "Rifle", 0, "target.weapon = new Weapon(3,4);target.onWeaponEquip();"),
  new Card(1, "Heavy Rifle", 0, "target.weapon = new Weapon(7,2);target.onWeaponEquip();"),
  new Card(2, "Grenade", 0, "tile.creature.health -= 5;"),
  new Card(3, "Airstrike", 0, "targetPlayer.fieldpart.forEach(tile => {if(tile.creature) {tile.creature.health -= 5 } })"),
  new Card(4, "Healthpack", 0, "target.creature.health += 4;"),
  new Card(5, "Smoke Grenade", 0, "target.effects.push(new Effect('smoked',1,'defensive'));"),
  new Card(6, "Shield", 0, "target.creature.hasShield = true;"),
  new Card(7, "Battle Armor", 0, "target.creature.armor += 2;"),
  new Card(8, "Trooper", 0, "target.creature = new Creature(4,4);"),
  new Card(9, "Heavy Trooper", 0, "target.creature =  new Creature(8,5);"),
]

@mx.Object
export class Effect {
  @mx public name: string
  @mx public duration: number
  @mx public tag: string // аттакующий эффект (offensive) или защищающий (defensive)

  constructor(name: string, duration: number, tag: string) {
    this.duration = duration
    this.name = name
    this.tag = tag
  }
}


@mx.Object
export class Tile {
  @mx public creature: Creature | null
  @mx public effects: Array<Effect>

  constructor(creature: Creature) {
    this.creature = creature
    this.effects = []
  }
}

@mx.Object
export class Player {
  @mx public name: string
  @mx public mana: number
  @mx public hand: Array<number>
  @mx public deck: Array<number>

  constructor(name: string, mana: number = Constants.STARTING_MANA) {
    this.name = name
    this.mana = mana
    this.hand = []
    this.deck = []
  }

}

@mx.Object
export class Weapon {
  @mx public durability: number
  @mx public damage: number
  @mx public effect: string

  constructor(durability: number = -1, damage: number = Constants.DEFAULT_WEAPON_DAMAGE, effect: string = '') {
    this.durability = durability
    this.damage = damage
    this.effect = effect
  }

  public afterUsage() {
    if (this.durability != -1) {
      this.durability -= 1
    }
    // eval(this.effect) испольняем эффект оружия после его использования
    if (this.durability == 0) {
      this.damage = Constants.DEFAULT_WEAPON_DAMAGE
      this.durability = -1
    }
  }
}

@mx.Object
export class Creature {
  @mx public health: number
  @mx public attack: number

  // Командир
  @mx public isCommander: boolean = false
  @mx public weapon: Weapon | null = null

  @mx public canAttack: boolean = true
  @mx public hasShield: boolean = false
  @mx public armor: number = 0

  constructor(health: number, attack: number, isCommander: boolean = false, weapon: Weapon | null = null) {
    this.health = health
    this.isCommander = isCommander
    if (isCommander && weapon) {
      this.attack = weapon.damage
      this.weapon = weapon
    } else {
      this.attack = attack
    }
  }

  public onWeaponEquip() {
    if (this.isCommander) {
      this.attack = this.weapon.damage
    }
  }
}

@mx.Object
export class GameState {
  @mx public field: Array<Tile>
  @mx public players = new Map<string, Player>()
  @mx public gameState: string
  @mx public currentTurn: string
  @mx public looser: string
  private commanderA: Creature | null
  private commanderB: Creature | null


  playerA = { ID: null, commander: null, fieldpart: null }
  playerB = { ID: null, commander: null, fieldpart: null }

  constructor() {
    //[позиция в массиве]  - позиция в игре
    //player A:  |     [0]-3           [1]-2           [2]-1      |     [3]-1           [4]-2           [5]-3 | :player B
    this.field = [new Tile(null), new Tile(null), new Tile(null), new Tile(null), new Tile(null), new Tile(null)]
    this.gameState = "pre"
    this.currentTurn = ""
    this.looser = ""
  }

  public createPlayer(id: string) {
    if (this.players.size == 0) {
      this.players.set(id, new Player(id))
      this.playerA.ID = id
    } else {
      this.players.set(id, new Player(id))
      this.playerB.ID = id
    }
  }

  public startGame() {
    // создаём и ставим коммандиров
    this.playerA.commander = new Creature(50, -1, true, new Weapon())
    this.playerB.commander = new Creature(50, -1, true, new Weapon())
    this.field[Constants.COMMANDER_A_POSITION].creature = this.playerA.commander
    this.field[Constants.COMMANDER_B_POSITION].creature = this.playerB.commander

    // устанавливаем служебные переменные
    this.playerA.fieldpart = [0, 1, 2]
    this.playerB.fieldpart = [3, 4, 5]
    this.gameState = "game"
    this.currentTurn = this.changeTurn()

    // заполняем руки и деки игроков
    this.players.forEach(player => {
      player.deck = this.FillDeck()
      for (let i = 0; i < Constants.HAND_SIZE; i++) {
        player.hand.push(this.getCardFromDeck(player.deck))
      }
    })
  }


  public removePlayer(id: string) {
    this.players.delete(id)
  }

  public attack(playerID: string, sourceTile: Tile, targetTile: Tile) {
    if (this.currentTurn === playerID) {
      let source = sourceTile.creature
      let target = targetTile.creature
      if (source && target) {
        // АТАКА ЭТАП 1: получаем количество атаки с источника
        let finalDamage = 0
        if (source.canAttack) {
          // TODO: проверить и обработать this.field[sourceIndex].effects на положительные эффекты
          if (source.isCommander) {
            finalDamage = source.weapon.damage
          } else {
            finalDamage = source.attack
          }
        }
        // АТАКА ЭТАП 2: обрабатываем защиту цели
        if (target.hasShield) {
          finalDamage = 0
          target.hasShield = false
        } else {
          if (target.armor) {
            if (finalDamage < target.armor) {
              finalDamage = 0
              target.armor -= finalDamage
            } else {
              finalDamage -= target.armor
            }
          }
          sourceTile.effects.forEach(effect => {
            if (effect.tag == 'defensive') {
              if (effect.name == 'smoked') {
                finalDamage *= 0.75
              }
            }
          })
        }
        // АТАКА ЭТАП 3: наносим урон
        target.health -= finalDamage
        if (target.health <= 0) {
          targetTile.creature = null
        }
        if (source.isCommander) {
          source.weapon.afterUsage()
        }
        this.checkLooser()
      }
    }
  }

  public executeCardEffect(playerID: string, cardID: number, target: Tile) {
    // различаем кто-кого атакует
    if (this.currentTurn === playerID) {
      let sourcePlayer = null
      let targetPlayer = null
      if (playerID === this.playerA.ID) {
        sourcePlayer = this.playerA
        targetPlayer = this.playerB
      } else {
        sourcePlayer = this.playerB
        targetPlayer = this.playerA
      }
      sourcePlayer.player = this.players.get(sourcePlayer.ID)
      if (sourcePlayer.player.mana >= Cards[cardID].cost) {
        eval(Cards[cardID].effect)
        sourcePlayer.player.mana -= Cards[cardID].cost
        sourcePlayer.player.hand.splice(sourcePlayer.player.hand.findIndex(card => cardID == card), 1)
      }

      this.checkLooser()

    }
  }

  public checkLooser() {
    if (this.playerA.commander.health == 0) {
      this.looser = this.playerA.ID
    }
    if (this.playerB.commander.health == 0) {
      this.looser = this.playerB.ID
    }
  }

  public changeTurn() {
    this.players.forEach((player) => {
      player.mana = 10
    })

    if (this.gameState === "game") {
      if (this.currentTurn.length == 0) {
        this.currentTurn = this.playerA.ID
      }
      //console.log('BEFORE END TURN', JSON.stringify(this.field, null, 4))
      if (this.currentTurn === this.playerA.ID) {
        this.turnHandler(this.playerA.fieldpart, 'defensive')
        this.turnHandler(this.playerB.fieldpart, 'offensive')
        this.currentTurn = this.playerB.ID
      } else if (this.currentTurn === this.playerB.ID) {
        this.turnHandler(this.playerB.fieldpart, 'defensive')
        this.turnHandler(this.playerA.fieldpart, 'offensive')
        this.currentTurn = this.playerA.ID
      }
      //console.log('AFTER END TURN', JSON.stringify(this.field, null, 4))
    }

    return this.currentTurn
  }

  public turnHandler(fieldpart: Array<number>, tag: string) {
    fieldpart.forEach(index => {
      this.field[index].effects.forEach((effect, eIndex) => {
        if (effect.tag == tag) {
          this.applyEffect(effect, this.field[index])
          effect.duration -= 1
        }
        if (effect.duration == 0) {
          this.field[index].effects.splice(eIndex, 1)

          if (effect.name == 'stunned') {
            if (this.field[index].creature) {
              this.field[index].creature.canAttack = true
            }
          }

        }
      })
    })
  }

  public applyEffect(effect: Effect, targetTile: Tile) {
    if (effect.name == 'stunned') {
      if (targetTile.creature) {
        targetTile.creature.canAttack = false
      }
    }
    if (effect.name == 'burning') {
      if (targetTile.creature) {
        targetTile.creature.health -= 1
      }
    }
  }

  //функция помошник для получения ячейки по игровой позиции и id игрока
  public getTileByPosition(position: number, owner: string) {
    if (owner == this.playerA.ID) {
      return this.field[3 - position]
    } else {
      return this.field[position + 2]
    }
  }

  public getCardFromDeck(playerDeck: Array<number>) {
    let index = Math.floor(Math.random() * playerDeck.length)
    let card = playerDeck[index]
    playerDeck.splice(index, 1)
    return card
  }

  public FillDeck() {
    let deck = []
    Cards.forEach(card => {
      deck.push(card.id)
      deck.push(card.id)
    })
    return deck
  }
}
