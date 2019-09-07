import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import TaskApi from "@/api/task-api";
import TaskLoader from "@/core/apps/task-loader";
import TaskCreater from "@/core/apps/task-creater";

Vue.use(Vuex);

const client = Axios.create({ baseURL: "http://localhost:3000" });
const taskApi = new TaskApi(client);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getTaskList() {
      const app = new TaskLoader(taskApi);
      const res = await app.exec();
      return res.tasks;
    },
    async createTask(_, task) {
      const svc = new TaskCreater(taskApi);
      const res = await svc.exec({ title: task.title });
      return res.task;
    }
  }
});
