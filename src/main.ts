import { createPinia } from 'pinia';
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "./index.css";
const pinia = createPinia()

// const routes = [
//     { path: "/", component: Create },
//     { path: "/browse", component: Browse },
// ];
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes,
// });

createApp(App).
    // use(router).
    use(pinia).mount("#app");
