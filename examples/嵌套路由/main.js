import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router/index.js'


// step4：导入路由 router
const app = createApp(App)
app.use(router)
app.mount('#app')