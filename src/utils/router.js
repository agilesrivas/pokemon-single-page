import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Habitat from '../views/Habitat.vue';
import Board from '../views/Board.vue';
import Berries from '../views/Berries.vue';
import Items from '../views/Items.vue';
import Backpack from '../views/Backpack.vue';
import Games from '../views/Games.vue';




import store from '../utils/store';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: Board
    },
    {
      path: '/habitats',
      name: 'habitats',
      component: Habitat
    },
    {
      path:'/habitat/:id',
      name: 'detail-habitat',
      component:Habitat
    },
    {
      path:'/berries',
      name: 'berries',
      component:Berries
    },
    {
      path:'/berrie/:id',
      name: 'detail-berrie',
      component:Berries
    },
    
    {
      path:'/item/:id',
      name: 'detail-item',
      component:Items
    },
    {
      path:'/items',
      name: 'items',
      component:Items
    },
    {
      path:'/backpack',
      name: 'backpack',
      component:Backpack
    },
    {
      path:'/games',
      name: 'games',
      component:Games
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== "login") {
    if (!store.state.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    if (store.state.token) {
      next("/")
    } else {
      next();
    }
  }
})
export default router