import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import FTPService from './components/ftp/FTPTable.vue'

const routes = [
    {
        path: '/hello',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/ftp',
        name: 'FTPService',
        component: FTPService
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).mount('#app')
