const Bag = 'assets/img/Decorations/bag.png'
const ServerImg = 'assets/img/Decorations/server.png'
const BagDark = 'assets/img/Decorations/bag_dark.png'
const Supply = 'assets/img/Decorations/supply.png'
const SupplyRotated = 'assets/img/Decorations/supply_rotated.png'
const Barrel = 'assets/img/Decorations/barrel.png'
const Box = 'assets/img/Decorations/box.png'
const HalfBox = 'assets/img/Decorations/halfbox.png'
const Car = 'assets/img/Decorations/car.png'
const Bags = 'assets/img/Decorations/bags1.png'
const BarrelGrey = 'assets/img/Decorations/barrel_gey.png'


Vue.component('Decorations', {
  template: `
  <div>
    <div class="servers">
      <img :src="ServerImg" alt="server">
      <img :src="ServerImg" alt="server">
    </div>
  
    <div class="bags">
      <img id="bag1" :src="BagDark" alt="Bag dark">
      <img id="bag2" :src="Bag" alt="Bag">
      <img id="bag3" :src="Bag" alt="Bag">
    </div>
  
    <div class="supplies">
      <img id="sup1" :src="SupplyRotated" alt="supply rotated">
      <img id="sup2" :src="SupplyRotated" alt="supply rotated">
      <img id="sup3" :src="Supply" alt="supply">
      <img id="sup4" :src="Supply" alt="supply">
    </div>
  
    <div class="barrels">
      <img id="bar1" :src="Barrel" alt="barrel">
      <img id="bar2" :src="Barrel" alt="barrel">
      <img id="bar3" :src="Barrel" alt="barrel">
      <img id="bar4" :src="Barrel" alt="barrel">
      <img id="bar5" :src="Barrel" alt="barrel">
    </div>
  
    <div class="boxes">
      <img id="box1" :src="HalfBox" alt="box">
      <img id="box2" :src="HalfBox" alt="box">
      <img id="box3" :src="Box" alt="box">
      <img id="box4" :src="Box" alt="box">
      <img id="box5" :src="Box" alt="box">
      <img id="box6" :src="HalfBox" alt="box">
    </div>
  
    <div class="bags">
      <img id="bags1" :src="Bags" alt="bags">
      <img id="bags2" :src="Bags" alt="bags">
    </div>
  
    <div class="car">
      <img id="car" :src="Car" alt="car">
    </div>
  
    <div class="barrels_grey">
      <img id="barg1" :src="BarrelGrey" alt="barrel grey">
      <img id="barg2" :src="BarrelGrey" alt="barrel grey">
      <img id="barg3" :src="BarrelGrey" alt="barrel grey">
    </div>
  </div>
  `,
  data() {
    return {
      ServerImg, Bag, BagDark, Supply, SupplyRotated, Barrel, Box, HalfBox, Car, Bags, BarrelGrey
    }
  }
})
