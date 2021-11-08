<template>
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

</template>

<script>
import ServerImg from '@/assets/img/Decorations/server.png'
import Bag from '@/assets/img/Decorations/bag.png'
import BagDark from '@/assets/img/Decorations/bag_dark.png'
import Supply from '@/assets/img/Decorations/supply.png'
import SupplyRotated from '@/assets/img/Decorations/supply_rotated.png'
import Barrel from '@/assets/img/Decorations/barrel.png'
import Box from '@/assets/img/Decorations/box.png'
import HalfBox from '@/assets/img/Decorations/halfbox.png'
import Car from '@/assets/img/Decorations/car.png'
import Bags from '@/assets/img/Decorations/bags1.png'
import BarrelGrey from '@/assets/img/Decorations/barrel_gey.png'

export default {
  name: 'Decorations',
  data() {
    return {
      ServerImg, Bag, BagDark, Supply, SupplyRotated, Barrel, Box, HalfBox, Car, Bags, BarrelGrey
    }
  }
}
</script>

<style lang="scss" scoped>
.servers {
  position: absolute;
  left: 215px;
  top: 229px;
}

.bags {
  #bag1, #bag2, #bag3 {
    position: absolute;
  }

  #bag1 {
    left: 183px;
    top: 584px;
  }

  #bag2 {
    left: 222px;
    top: 559px;
    z-index: 3;
  }

  #bag3 {
    left: 247px;
    top: 572px;
    z-index: 2;
  }
}

.supplies {
  #sup1, #sup2, #sup3, #sup4 {
    position: absolute;
  }

  #sup1 {
    left: 400px;
    top: 467px;
    z-index: 2;
  }

  #sup2 {
    left: 400px;
    top: 511px;
  }

  #sup3 {
    left: 528px;
    top: 477px;
    z-index: 2;
  }

  #sup4 {
    left: 528px;
    top: 523px;
  }
}

.barrels {
  #bar1, #bar2, #bar3, #bar4, #bar4, #bar5, {
    position: absolute;
  }

  #bar1 {
    left: 740px;
    top: 368px;
    z-index: 1;
  }

  #bar2 {
    left: 813px;
    top: 326px;
    z-index: 3;
  }

  #bar3 {
    left: 813px;
    top: 426px;
    z-index: 2;
  }

  #bar4 {
    left: 885px;
    top: 268px;
    z-index: 2;
  }

  #bar5 {
    left: 885px;
    top: 368px;
  }
}

.boxes {
  #box1, #box2, #box3, #box4, #box5, #box6 {
    position: absolute;
  }

  #box1 {
    left: 909px;
    top: 470px;
    z-index: 2;
  }

  #box2 {
    left: 981px;
    top: 343px;
    z-index: 2;
  }

  #box3 {
    left: 981px;
    top: 399px;
  }

  #box4 {
    left: 1053px;
    top: 339px;
    z-index: 2;
  }

  #box5 {
    left: 1053px;
    top: 399px;
    z-index: 1;
  }

  #box6 {
    left: 1122px;
    top: 399px;
  }
}

.bags {
  #bags1, #bags2 {
    position: absolute;
  }

  #bags1 {
    left: 1318px;
    top: 496px;
    z-index: 2;
  }

  #bags2 {
    left: 1318px;
    top: 548px;
  }
}

.car {
  #car {
    position: absolute;
    left: 1460px;
    top: 331px;
  }
}

.barrels_grey {
  #barg1, #barg2, #barg3 {
    position: absolute;
  }

  #barg1 {
    left: 1750px;
    top: 545px;
    z-index: 2;
  }

  #barg2 {
    left: 1798px;
    top: 517px;
  }

  #barg3 {
    left: 1846px;
    top: 545px;
    z-index: 2;
  }
}

</style>
