import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/catalog',
        name: 'catalog',
        component: () => import(/* webpackChunkName: "about" */ '../views/CatalogView.vue'),
        children: [
          {
            path: ':id',
            name: 'product',
            component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue'),
          },
        ]
      },
      // {
      //   path: '/catalog',
      //   name: 'catalog',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/CatalogView.vue'),
      // },
      // {
      //   path: '/catalog/:id',
      //   name: 'product',
      //   component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue'),
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
