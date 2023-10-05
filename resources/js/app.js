import { createApp } from 'vue'
import App from "./app.vue"
require('./bootstrap');
const app = createApp(App)
app.mount("#app-vue")
