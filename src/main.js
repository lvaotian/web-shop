

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "@/styles/common.scss"
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'
const app = createApp(App)

app.use(componentPlugin)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')

