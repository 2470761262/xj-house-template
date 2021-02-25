import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import api from "./api/api";

Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$api = api;

new App().$mount();
