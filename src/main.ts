import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

// Pinia 먼저 설치
app.use(pinia)
// Router 설치
app.use(router)

// Router가 준비된 후 앱 마운트
router.isReady().then(() => {
    app.mount('#app')
})