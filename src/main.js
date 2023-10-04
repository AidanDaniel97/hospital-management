import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "@/store/index.js";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

// Pass store into cypress
if (window.Cypress) {
  // Add `store` to the window object only when testing with Cypress
  window.store = store;
}
