import { createStore } from "vuex";

export default createStore({
  state: {
    isHeaderHidden: false,
    isFooterHidden: false,
  },
  getters: {
    isHeaderHidden(state) {
      return state.isHeaderHidden;
    },
    isFooterHidden(state) {
      return state.isFooterHidden;
    },
  },
  mutations: {
    toggleHeaderHidden(state, flag) {
      state.isHeaderHidden = flag;
    },
    toggleFooterHidden(state, flag) {
      state.isFooterHidden = flag;
    },
  },
  actions: {
    toggleHeaderHidden({ commit }, flag) {
      commit("toggleHeaderHidden", flag);
    },
    toggleFooterHidden({ commit }, flag) {
      commit("toggleFooterHidden", flag);
    },
  },
  modules: {},
});
