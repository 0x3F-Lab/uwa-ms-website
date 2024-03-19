/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Just creating the app and mounting into index.html @ #app

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
