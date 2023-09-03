import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import Contact from '../views/Contact.vue'
import Equestrian from '../views/Equestrian.vue'
import Accomodation from '../views/Accomodation.vue'
import Polo from '../views/Polo.vue'
import Charity from '../views/Charity.vue'
import Dine from '../views/Dine.vue'
import Shop from '../views/Shop.vue'
import SiteGallery from '../views/SiteGallery.vue'
import NotFound from '../views/NotFound.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: SiteGallery
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/charity',
    name: 'Charity',
    component: Charity
  },
  {
    path: '/dine',
    name: 'Dine',
    component: Dine
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/equestrian',
    name: 'Equestrian',
    component: Equestrian
  },
  {
    path: '/accomodation',
    name: 'Accomodation',
    component: Accomodation
  },
  {
    path: '/polo',
    name: 'Polo',
    component: Polo
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
