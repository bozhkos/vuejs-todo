import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Home from "@/views/Home";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.component("todo", Home);
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
