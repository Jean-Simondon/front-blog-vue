import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import(/* webpackChunkName: "allArticles" */ "../views/Articles.vue")
  },
  {
    path: "/article/:articleId/:mode", // mode == "create" || "read" || "update" || "delete"
    name: "Article",
    component: () => import(/* webpackChunkName: "manage article" */ "../views/Article.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
