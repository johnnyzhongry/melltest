import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const originalPush = VueRouter.prototype.push
	VueRouter.prototype.push = function push(location) {
	   return originalPush.call(this, location).catch(err => err)
	}
Vue.use(VueRouter)
  const routes = [
	  {
	    path: '/',
	    redirect: '/home'//缺省时候重定向到/home
	  },
	  {
	    path: '/home',
	    component: () => import ('../views/home/Home.vue')
	  },
 
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/profile/Profile.vue')
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cart/Cart.vue')
  }
]
//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = new VueRouter({
  routes
  
})

export default router
