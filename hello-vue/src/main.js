import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'

let app = createApp(App) // Create app

app.config.globalProperties.$hello_api = HelloAPI // Configure HelloAPI file as a global property (hello_api)

app.mount('#app') // Mount app div to app
