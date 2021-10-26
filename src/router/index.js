import { createRouter, createWebHistory } from 'vue-router';
import Auth from '@/views/Auth.vue';
import Menu from '@/views/Menu.vue'
import GameField from '@/views/GameField.vue';
import SelectCharacter from '@/views/SelectCharacter';

const routes = [
  {path: '/', component: Auth},
  {path: '/menu', component: Menu},
  {path: '/game', component: GameField},
  {path: '/change', component: SelectCharacter}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
