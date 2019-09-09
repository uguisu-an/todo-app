<template>
  <div>
    <ol>
      <li v-for="t in tasks" :key="t.id">
        {{ t.title }}
      </li>
    </ol>
    <form @submit.prevent="createTask">
      <input type="text" v-model="createTaskRequest.title" required />
      <button>
        + Add Task
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import { CreateTaskRequest } from "@/core/usecases/create-task";
import TaskCreater from "@/core/interactors/task-creator";
import TaskSearcher from "@/core/interactors/task-searcher";
import TaskRepository from "@/core/repositories/task-repository";
import TaskApi from "@/api/task-api";

const client = Axios.create({ baseURL: "http://localhost:3000" });
const taskApi = new TaskApi(client);
const taskRepository = new TaskRepository(taskApi);

interface Task {
  id: number;
  title: string;
}

@Component
export default class Todo extends Vue {
  tasks: Task[] = [];
  createTaskRequest: CreateTaskRequest = { title: "" };

  created() {
    this.initTaskList();
  }

  async initTaskList() {
    const handler = new TaskSearcher(taskRepository);
    const res = await handler.handle({});
    this.tasks = res.tasks;
  }

  async createTask() {
    const handler = new TaskCreater(taskRepository);
    const res = await handler.handle(this.createTaskRequest);
    this.tasks.push(res);
    this.createTaskRequest = { title: "" };
  }
}
</script>
