import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
// import "element-plus/lib/theme-chalk/index.css";
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";

// const options = { containerClassName: "ct-notification" };
// ......................v3..........................................
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css"

const appInstance = createApp(App);
appInstance.use(router);
// appInstance.use(options);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");