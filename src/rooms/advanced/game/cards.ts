let Cards = [
    {    
        id: 1,
        name: "Rifle",
        cost: 0,
        effect: "target.weapon = new Weapon(3,4);target.onWeaponEquip();"
    },
    {    
        id: 2,
        name: "Heavy Rifle",
        cost: 0,
        effect: "target.weapon = new Weapon(7,2);target.onWeaponEquip();"
    },
    {    
        id: 3,
        name: "Grenade",
        cost: 0,
        effect: "tile.creature.health -= 5;"
    },
    {    
        id: 4,
        name: "Airstrike",
        cost: 0,
        effect: "targetPlayer.fieldpart.forEach(tile => {if(tile.creature) {tile.creature.health -= 5 } })"
    },
    {    
        id: 5,
        name: "Healthpack",
        cost: 0,
        effect: "target.creature.health += 4;"
    },
    {    
        id: 6,
        name: "Smoke Grenade",
        cost: 0,
        effect: "target.effects.push(new Effect('smoked',1,'defensive'));"
    },
    {    
        id: 7,
        name: "Shield",
        cost: 0,
        effect: "target.creature.hasShield = true;"
    },
    {    
        id: 8,
        name: "Battle Armor",
        cost: 0,
        effect: "target.creature.armor += 2;"
    },
    {    
        id: 9,
        name: "Trooper",
        cost: 0,
        effect: "target.creature = new Creature(4,4);"
    },
    {    
        id: 10,
        name: "Heavy Trooper",
        cost: 0,
        effect: "target.creature =  new Creature(8,5);"
    },

]

export {Cards}