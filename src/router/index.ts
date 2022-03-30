import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/*import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'*/

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    component: HomeView
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignInView.vue')
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
