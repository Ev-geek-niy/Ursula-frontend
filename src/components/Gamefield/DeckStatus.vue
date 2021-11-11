<template>
  <div class="deck">
    <p>
      <slot></slot>
    </p>
    <div class="wrapper">
      <div
        v-for="i in deck"
        :class="{'available': i.status, 'missing': !i.status}"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeckStatus',
  data() {
    return {
      deck: [{status: true}, {status: true}, {status: true}, {status: true}, {status: true},
        {status: true}, {status: true}, {status: true}, {status: true}, {status: true},
        {status: false}, {status: false}, {status: false}, {status: false}, {status: false}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.deck {
  width: 320px;
  height: 100px;
  background: #C4C4C4;
  border: 4px solid #626262;
  padding: 15px 56px;

  p {
    text-align: center;
    font-size: 20px;
  }
}

.wrapper {
  padding-top: 7px;
  width: 190px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.available {
  width: 32px;
  height: 3px;
  background: #20D6C7;
}

.missing {
  width: 32px;
  height: 3px;
  background: #626262;
}
</style>
