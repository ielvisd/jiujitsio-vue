import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

store.commit("increment");
// eslint-disable-next-line no-console
console.log(store.state.count);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
