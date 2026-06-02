import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'

import HomeView from './views/HomeView.vue'
import ProductsView from './views/ProductsView.vue'
import ContactView from './views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
  { path: '/contact', component: ContactView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')