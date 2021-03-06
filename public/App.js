const store = new Vuex.Store({
  modules: {
    mosxStoreSync: mosxStore,
    gameStore: gameStore,
  }
})

const routes = [
  {path: '/', component: Auth},
  {path: '/menu', component: Menu},
  {path: '/game', component: Gamefield}
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  base: '/'
});

var app = new Vue({
  el: '#app',
  store,
  router
});
