import { createStore } from "vuex";
import axios from "axios";
const currentHost = window.location.hostname;

export const store = createStore({
  state: {
    items: [],
    token: localStorage.getItem("token") || "",
  },
  mutations: {
    updateItem(state, items) {
      state.items = items;
    },
    newItem(state, item) {
      state.items.push(item);
    },
    auth(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = "";
      localStorage.clear("token");
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
    /* eslint-disable  no-unused-vars */
    async getItem({ commit }, id) {
      const response = await axios.get(
        `http://${currentHost}:3000/items/${id}`
      );
      return response.data;
    },
    async register({ commit }, regData) {
      try {
        let token = (
          await axios.post(`http://${currentHost}:3000/registers`, regData)
        ).data;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        commit("auth", token);
        return "registered";
      } catch (error) {
        console.log(error.toJSON());
        return error.code;
      }
    },
  },
});
