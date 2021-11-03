import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: '',
      avatarUrl: '',
      score: 0,
    },
    clothes: [],
    accessories: [],
  },
  mutations: {
    updateUserInfo(state, response) {
      state.userInfo = response;
    },

    setNewScore(state, newScore) {
      state.userInfo.score -= newScore;
    },

    updateClothes(state, response) {
      state.clothes = response;
    },

    updateAccessories(state, response) {
      state.accessories = response;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios
        .get('templates/7ZW3y5GAuIge/data')
        .then(({ data }) => {
          if (data && Object.keys(data).length) {
            commit('updateUserInfo', data);
          }
        });
    },

    fetchClothes({ commit }) {
      axios
        .get('templates/-_RLsEGjof6i/data')
        .then(({ data }) => {
          if (data && Object.keys(data).length) {
            commit('updateClothes', data);
          }
        });
    },

    fetchAccessories({ commit }) {
      axios
        .get('templates/q3OPxRyEcPvP/data')
        .then(({ data }) => {
          if (data && Object.keys(data).length) {
            commit('updateAccessories', data);
          }
        });
    },
  },
  modules: {
  },
});
