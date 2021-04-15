import { createApp } from "vue";
import { store, key } from "./store/index";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/assets/css/tailwind.css";
import { filters } from "./filters";

const app = createApp(App);

// Register global filters used throughout the app.
app.config.globalProperties.$filters = filters;

app.use(store, key).use(router).mount("#app");
