import { Hospital } from "@/assets/classes/Hospital.js";

const state = {
  hospital: null,
};

const getters = {
  getHospital(state) {
    return state.hospital;
  },
  getHospitalInventory(state) {
    return state.hospital.inventory || [];
  },
};

const mutations = {
  SET_HOSPITAL(state, hospital) {
    state.hospital = hospital;
  },
};

const actions = {
  setHospital({ commit }, hospital) {
    // Create a new hospital object
    const newHospital = new Hospital(
      hospital.hospitalId,
      hospital.hospitalName,
      hospital.config
    );

    // Set it to the current hospital
    commit("SET_HOSPITAL", newHospital);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
