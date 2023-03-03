import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import FTPService from './components/ftp/FTPTable.vue'
import ServiceSetting from './components/ServiceSetting.vue'

const vuetify = createVuetify({
    components,
    directives,
  })

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/ftp',
        name: 'FTPService',
        component: FTPService
    },
    {
        path: '/transfer',
        name: 'FileTransfer',
        component: FTPService
    },
    {
        path: '/setting',
        name: 'ServiceSetting',
        component: ServiceSetting
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createApp(App).use(router).use(vuetify).mount('#app')
