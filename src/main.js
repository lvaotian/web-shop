

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "@/styles/common.scss"
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
// 注册
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(componentPlugin)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

