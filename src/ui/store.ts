import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import TaskApi from "@/api/task-api";

Vue.use(Vuex);

const client = Axios.create({ baseURL: "http://localhost:3000" });

export default new Vuex.Store({
  state: {},
  getters: {
    taskApi: () => new TaskApi(client)
  },
  mutations: {},
  actions: {}
});
