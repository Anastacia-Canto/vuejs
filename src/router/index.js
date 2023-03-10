import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Calendar from '../views/CalendarView.vue'

Vue.use(VueRouter)

const routes = [
  {
	path: '/',
	name: 'Home',
	component: Todo
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
	path: '/calendar',
	name: 'Calendar',
	component: Calendar
  }
]

const router = new VueRouter({
  routes
})

export default router
