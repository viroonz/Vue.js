import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('./views/Home.vue' /* webpackChunkName: 'Home' */)
const About = () => import('./views/About.vue'/* webpackChunkName: 'About' */)
const Contact = () => import('./views/Contact.vue'/* webpackChunkName: 'Contact' */)
const User = () => import('./views/User.vue'/* webpackChunkName: 'User' */)
const UserProfile = () => import('./views/UserProfile.vue'/* webpackChunkName: 'User' */)
const Form = () => import('./views/Form.vue'/* webpackChunkName: 'form' */)
const Nested = () => import('./views/Nested.vue'/* webpackChunkName: 'i18n' */)
const Chart = () => import('./views/Chart.vue'/* webpackChunkName: 'Chart' */)
const Search = () => import('./views/Search.vue'/* webpackChunkName: 'Search' */)
const i18n = () => import('./views/i18n.vue'/* webpackChunkName: 'i18n' */)

Vue.use(VueRouter)

const routes = [
    { path: '/',component:Home },
    { path: '/form',component:Form },
    { path: '/chart',component:Chart },
    { path: '/i18n',component:i18n },
    { path: '/about',component:About },
    { path: '/nested',component:Nested },
        { path: '/search', component: Search },
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


