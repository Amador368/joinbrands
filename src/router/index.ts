import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUpView.vue')
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/SignInView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
  },
  {
    path: '/lost-password',
    name: 'lostpassword',
    component: () => import(/* webpackChunkName: "lostpassword" */ '../views/LostPasswordView.vue')
  }    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
