import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import TaskApi from "@/api/task-api";
import TaskLoader from "@/core/apps/task-loader";
import TaskCreater from "@/core/apps/task-creater";
import Task from "@/core/models/task";

Vue.use(Vuex);

const client = Axios.create({ baseURL: "http://localhost:3000" });
const taskApi = new TaskApi(client);

export default new Vuex.Store({
  state: {
    tasks: [] as Task[]
  },
  mutations: {
    tasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    }
  },
  actions: {
    async getTaskList({ commit }) {
      const app = new TaskLoader(taskApi);
      const res = await app.exec();
      commit("tasks", res.tasks);
    },
    async createTask({ commit }, task) {
      const svc = new TaskCreater(taskApi);
      const res = await svc.exec({ title: task.title });
      commit("addTask", res.task);
    }
  }
});
