import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rooms from './views/Rooms.vue'
import Room from './views/Room.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/rooms",
      name: "rooms",
      component: Rooms
    },
    {
      path: "/room/:id",
      name: "room",
      component: Room
    }
  ]
});