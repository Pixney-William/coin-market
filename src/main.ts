import { createApp, h } from "vue";
import { store, key } from "./store/index";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";
import { formatters } from "./formatters";

const app = createApp(App);

// Register global filters used throughout the app.
app.config.globalProperties.$format = formatters;

// Title component
app.component("Title", {
  render() {
    return h(
      "h" + this.level, // tag name
      {}, // props/attributes
      this.$slots.default() // array of children
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
app.use(store, key).use(router).mount("#app");
