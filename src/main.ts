import { createApp } from "vue";
import { createPinia } from "pinia";
import uviewPlus from "uview-plus";

import App from "./App.vue";

import "@/styles/index.less";
import "./static/font/iconfont.css";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia).use(uviewPlus).mount("#app");
