import Vue from "vue";
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Feed from "@/views/Feed.vue"
import Signup from "@/views/Signup.vue"
import Login from "@/views/Login.vue"
    
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/feed",
    name: "feed",
    component: Feed 
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;