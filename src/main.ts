import Vue from "vue";
import App from "./ui/App.vue";
import router from "./ui/router";
import store from "./ui/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
