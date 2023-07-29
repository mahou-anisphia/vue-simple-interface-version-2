import { createStore } from "vuex";
import axios from "axios";
const currentHost = window.location.hostname;

export const store = createStore({
  state: {
    items: [],
  },
  mutations: {
    updateItem(state, items) {
      state.items = items;
    },
    newItem(state, item) {
      state.items.push(item);
    },
  },
  actions: {
    async getItems({ commit }) {
      let dataToGet = (await axios.get(`http://${currentHost}:3000/items`))
        .data;
      commit("updateItem", dataToGet);
    },
    async addItem({ commit }, dataToPost) {
      axios.post(`http://${currentHost}:3000/items`, dataToPost);
      commit("newItem", dataToPost);
    },
  },
});
