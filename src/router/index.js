import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import GameInfo from '../views/GameInfo.vue';
import Store from '../views/Store.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/game-info',
    name: 'Game Info',
    component: GameInfo,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
