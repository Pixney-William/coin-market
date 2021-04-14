import { createApp } from "vue";
import { store, key } from "./store/index";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$filters = {
  currencyUSD(idIcon: string) {
    if (!idIcon) return "/svgs/missing.svg";
    return `https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_64/${idIcon.replace(
      /-/g,
      ""
    )}.png`;
  },
};

app.use(store, key).use(router).mount("#app");
