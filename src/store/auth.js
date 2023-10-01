import { users } from "@/assets/users/users.js";

const state = {
  isAuthenticated: false,
  user: null,
};

const getters = {
  getIsAuthenticated(state) {
    return state.isAuthenticated;
  },
};

const mutations = {
  SET_AUTHENTICATED(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  SET_USER(state, user) {
    state.user = user || null;
  },
};

const actions = {
  login({ commit, dispatch }, { username, password }) {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      throw new Error("Invalid username or password, please try again.");
    }

    commit("SET_AUTHENTICATED", true);
    commit("SET_USER", user);
    dispatch("hospital/setHospital", user.hospital, { root: true });
  },
  logout({ commit }) {
    commit("SET_AUTHENTICATED", false);
    commit("SET_USER", null);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
