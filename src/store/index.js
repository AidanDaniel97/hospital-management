import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import hospital from "./hospital";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    hospital,
  },
});

export default store;
