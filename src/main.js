import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import components
import HomeComponent from './components/HomeComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ContactUsComponent from './components/ContactUsComponent.vue';

// Define routes
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/services', component: ServicesComponent },
  { path: '/about', component: AboutComponent },
  { path: '/contactus', component: ContactUsComponent }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create the Vue app and use the router
const app = createApp(App);
app.use(router);
app.mount('#app');
