import { mx } from "mosx"

@mx.Object
export class Effect {
  @mx public name: string
  @mx public duration: number 
  @mx public tag: string // аттакующий эффект (offensive) или защищающий (defensive)

  constructor(name:string,duration:number,tag:string) {
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

  constructor(name:string,mana:number = 3){
    this.name = name
    this.mana = mana 
  }
}

@mx.Object
export class Weapon {
  @mx public durability: number
  @mx public damage: number
  @mx public effect: string

  constructor(durability :number =  -1, damage :number = 4, effect :string = '') {
    this.durability = durability
    this.damage = damage
    this.effect = effect
  }

  public afterUsage() {
    if (this.durability != -1) {
      this.durability -= 1
    }
    // eval(this.effect) испольняем эффект оружия после его использования
    if(this.durability == 0) {
      this.damage = 4
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
  
  constructor(health :number, attack :number, isCommander :boolean = false, weapon :Weapon | null = null) {
    this.health = health
    this.isCommander = isCommander
    if(isCommander && weapon) {
      this.attack = weapon.damage
      this.weapon = weapon  
    }
    else {
      this.attack = attack
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


  playerA = {ID: null, commander: null, fieldpart: null}
  playerB = {ID: null, commander: null, fieldpart: null}

  constructor(){
    //[позиция в массиве]  - позиция в игре  
    //player A:  |     [0]-3           [1]-2           [2]-1      |     [3]-1           [4]-2           [5]-3 | :player B
    this.field = [ new Tile(null), new Tile(null), new Tile(null) , new Tile(null), new Tile(null), new Tile(null) ] 
    this.gameState = "pre"
    this.currentTurn = ""
    this.looser = ""
  }

  public createPlayer(id: string) {
    if(this.players.size == 0){
      this.players.set(id, new Player(id))
      this.playerA.ID = id
    }
    else{
      this.players.set(id, new Player(id))
      this.playerB.ID = id
    }
    
  }

  public startGame() {
    this.playerA.commander = new Creature(50,-1,true,new Weapon())
    this.playerB.commander = new Creature(50,-1,true,new Weapon())
    this.field[2].creature = this.playerA.commander
    this.field[3].creature = this.playerB.commander 
    this.playerA.fieldpart = [0,1,2]
    this.playerB.fieldpart = [3,4,5]
    this.gameState = "game"
    this.currentTurn = this.changeTurn()
    console.log(this.currentTurn)
  }

  public removePlayer(id: string) {
    this.players.delete(id)
  }

  public attack(sourceIndex:number, targetIndex:number) {
    let source = this.field[sourceIndex].creature
    let target = this.field[targetIndex].creature
    if(source && target) {
      // АТАКА ЭТАП 1: получаем количество атаки с источника
      let finalDamage = 0
      if(source.canAttack) {
        // TODO: проверить и обработать this.field[sourceIndex].effects на положительные эффекты
        if(source.isCommander) {
          finalDamage = source.weapon.damage
        }
        else {
          finalDamage = source.attack
        }
      }
      // АТАКА ЭТАП 2: обрабатываем защиту цели
      this.field[targetIndex].effects.forEach(effect => {
        if(effect.tag == 'defensive') {
          if(effect.name == 'smoked') {
            finalDamage *= 0.75
          }
        }
      })

      // АТАКА ЭТАП 3: наносим урон 
      target.health -= finalDamage
      if(target.health <= 0) {
        this.field[targetIndex] = null
      }
      if(source.isCommander) {
        source.weapon.afterUsage()
      }
      this.checkLooser()
    }
  }

  public executeCardEffect(playerID:string, cardID:string, target: Creature | null) {
    // различаем кто-кого атакует
    // TODO: можно сделать это лучше
    if(this.currentTurn === playerID) {
      let source = null
      let target = null
      if(playerID === this.playerA.ID) {
        source = this.playerA
        target = this.playerB
      }
      else {
        source = this.playerB
        target = this.playerA
      }
      const targetPlayer = this.players.get(target.ID)
      const sourcePlayer = this.players.get(source.ID)

      // получаем из дб инфу о карте 
      if(cardID == '1') {
        target.commander.health -= 10
        sourcePlayer.mana -= 2
      }
      if(cardID == '2') {
        source.commander.health += 10
        sourcePlayer.mana -= 1
      }
      if(cardID == '3') {
        for(let i = 0; i < source.fieldpart.length;i++) {
          if(!this.field[source.fieldpart[i]].creature) {
            this.field[source.fieldpart[i]].creature = new Creature(50,2)
            break
          }
        }
      }
      if(cardID == '4') {
        this.getTileByPosition(1,source.ID).effects.push(new Effect('smoked',2,'defensive'))
        sourcePlayer.mana -= 3
      }

      this.checkLooser();

      if(sourcePlayer.mana <= 0){
        this.changeTurn()
      }
      
    }
  }

  public checkLooser() {
    if(this.playerA.commander.health == 0) {
      this.looser = this.playerA.ID
    }
    if(this.playerB.commander.health == 0) {
      this.looser = this.playerB.ID
    }
  }

  public changeTurn() {
    this.players.forEach( (player) => {
      player.mana = 3
    })

    if(this.gameState === "game") {
      if(this.currentTurn.length == 0) {
        this.currentTurn = this.playerA.ID
      }
      console.log('BEFORE END TURN',JSON.stringify(this.field, null, 4))
      if(this.currentTurn === this.playerA.ID) {
        this.turnHandler(this.playerA.fieldpart,'defensive')
        this.turnHandler(this.playerB.fieldpart,'offensive')
        this.currentTurn = this.playerB.ID
      }
      else if(this.currentTurn === this.playerB.ID) {
        this.turnHandler(this.playerB.fieldpart,'defensive')
        this.turnHandler(this.playerA.fieldpart,'offensive')
        this.currentTurn = this.playerA.ID
      }
      console.log('AFTER END TURN',JSON.stringify(this.field, null, 4))
    }

    return this.currentTurn
  }

  public turnHandler(fieldpart: Array<number>,tag:string) {
    fieldpart.forEach(index => {
      this.field[index].effects.forEach((effect,eIndex) => {
        if(effect.tag == tag) {
          this.applyEffect(effect,this.field[index])
          effect.duration -= 1
        }
        if(effect.duration == 0) {
          this.field[index].effects.splice(eIndex,1)

          if(effect.name == 'stunned') {
            if(this.field[index].creature) {
              this.field[index].creature.canAttack = true
            }
          }

        }
      })
    });
  }

  public applyEffect(effect: Effect, targetTile: Tile){
    if(effect.name == 'stunned') {
      if(targetTile.creature) {
        targetTile.creature.canAttack = false
      }
    }
    if(effect.name == 'burning') {
      if(targetTile.creature) {
        targetTile.creature.health -= 1
      }
    }
  }

  //функция помошник для получения ячейки по игровой позиции и id игрока
  public getTileByPosition(position: number, owner: string) {
    if(owner == this.playerA.ID) {
      return this.field[3 - position]
    }
    else {
      return this.field[position + 2]
    }
  }
}
