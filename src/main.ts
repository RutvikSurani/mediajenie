import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Snotify, { SnotifyPosition } from 'vue-snotify';
import 'vue-snotify/styles/material.css'

const options = {
  toast: {
    position: SnotifyPosition.rightBottom,
    timeout: 4000
  }
};

Vue.use(
  Snotify,
  options
);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
