<template>
  <div>
    <ol>
      <li v-for="t in tasks" :key="t.id">
        {{ t.title }}
      </li>
    </ol>
    <create-task-form :req="req" @create="create"></create-task-form>
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
import CreateTaskForm from "../components/CreateTaskForm.vue";

const client = Axios.create({ baseURL: "http://localhost:3000" });
const taskApi = new TaskApi(client);
const taskRepository = new TaskRepository(taskApi);

interface Task {
  id: number;
  title: string;
}

@Component({
  components: {
    CreateTaskForm
  }
})
export default class Todo extends Vue {
  req: CreateTaskRequest = { title: "" };
  tasks: Task[] = [];

  created() {
    this.initTaskList();
  }

  async initTaskList() {
    const res = await new TaskSearcher(taskRepository).handle({});
    this.tasks = res.tasks;
  }

  async create(req: CreateTaskRequest) {
    const res = await new TaskCreater(taskRepository).handle(req);
    this.tasks.push(res);
    this.req = { title: "" };
  }
}
</script>
