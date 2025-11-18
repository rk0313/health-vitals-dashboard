import { createApp } from 'vue'
import App from './App.vue'
import store from './store' // Import the Vuex store

const app = createApp(App)

app.use(store) // Connect Vuex to the app
app.mount('#app')