import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemsPage from './components/ItemsPage.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'items', component: ItemsPage },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
