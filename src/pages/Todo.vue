<template>
  <div>
    <ol>
      <li v-for="t in tasks" :key="t.id">
        {{ t.title }}
      </li>
    </ol>
    <v-new-task-form v-bind="{ task }" @create="create"></v-new-task-form>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import { CreateTaskRequest } from "@/usecases/create-task";
import TaskCreater from "@/usecases/interactors/task-creator";
import TaskSearcher from "@/usecases/interactors/task-searcher";
import TaskRepository from "@/entities/repositories/task-repository";
import TaskApi from "@/api/task-api";
import VNewTaskForm from "@/components/VNewTaskForm.vue";
import NewTask from "@/models/new-task";

const client = Axios.create({ baseURL: "http://localhost:3000" });
const taskApi = new TaskApi(client);
const taskRepository = new TaskRepository(taskApi);

interface Task {
  id: number;
  title: string;
}

@Component({
  components: {
    VNewTaskForm
  }
})
export default class Todo extends Vue {
  task: NewTask = new NewTask();
  tasks: Task[] = [];

  created() {
    this.initTaskList();
  }

  async initTaskList() {
    const res = await new TaskSearcher(taskRepository).handle({});
    this.tasks = res.tasks;
  }

  async create(task: NewTask) {
    const res = await new TaskCreater(taskRepository).handle(task);
    this.tasks.push(res);
    this.task = new NewTask();
  }
}
</script>
