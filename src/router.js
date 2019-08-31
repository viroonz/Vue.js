import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('./views/Home.vue' /* webpackChunkName: 'Home' */)
const About = () => import('./views/About.vue'/* webpackChunkName: 'About' */)
const Contact = () => import('./views/Contact.vue'/* webpackChunkName: 'Contact' */)
const User = () => import('./views/User.vue'/* webpackChunkName: 'User' */)
const UserProfile = () => import('./views/UserProfile.vue'/* webpackChunkName: 'User' */)



Vue.use(VueRouter)

const routes = [
    { path: '/',component:Home },
    { path: '/About',component:About },
    { path: '/Contact',component:Contact },
    { path: '/user',component:User },
    { path: '/user/:id',component:UserProfile },
    { path: '*',component:Home }
]
const router = new VueRouter ({
    routes : routes,
    mode: 'history'

})
export default router 


