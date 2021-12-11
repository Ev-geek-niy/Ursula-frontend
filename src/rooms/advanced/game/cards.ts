import { mx } from "mosx"
@mx.Object
export class Card {
  @mx public id: number
  @mx public name: string
  @mx public cost: number
  @mx public effect: string

  constructor(id:number,name:string,cost:number,effect:string) {
      this.id = id
      this.name = name
      this.cost = cost
      this.effect = effect
  }
}

const Cards = [
    new Card(0,"Rifle",0,"target.weapon = new Weapon(3,4);target.onWeaponEquip();"),
    new Card(1,"Heavy Rifle",0,"target.weapon = new Weapon(7,2);target.onWeaponEquip();"),
    new Card(2,"Grenade",0,"tile.creature.health -= 5;"),
    new Card(3,"Airstrike",0,"targetPlayer.fieldpart.forEach(tile => {if(tile.creature) {tile.creature.health -= 5 } })"),
    new Card(4,"Healthpack",0,"target.creature.health += 4;"),
    new Card(5,"Smoke Grenade",0,"target.effects.push(new Effect('smoked',1,'defensive'));"),
    new Card(6,"Shield",0,"target.creature.hasShield = true;"),
    new Card(7,"Battle Armor",0,"target.creature.armor += 2;"),
    new Card(8,"Trooper",0,"target.creature = new Creature(4,4);"),
    new Card(9,"Heavy Trooper",0,"target.creature =  new Creature(8,5);"),
]

export {Cards}