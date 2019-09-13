<template>
  <todo v-bind="{ newTask, taskList }" v-on="{ createTask }"></todo>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import TaskCreater from "@/usecases/interactors/task-creator";
import TaskSearcher from "@/usecases/interactors/task-searcher";
import TaskRepository from "@/entities/repositories/task-repository";
import TaskApi from "@/api/task-api";
import NewTask from "@/models/new-task";
import TaskListItem from "@/models/task-list-item";
import TaskListPresenter from "@/presenters/task-list-presenter";
import Task from "@/usecases/models/task";

import Todo from "@/views/Todo.vue";
import CreateTaskInteractor from "../usecases/create-task";

const client = Axios.create({ baseURL: "http://localhost:3000" });
const taskApi = new TaskApi(client);
const taskRepository = new TaskRepository(taskApi);

@Component({
  components: {
    Todo
  }
})
export default class TodoPage extends Vue {
  newTask: NewTask = new NewTask();

  get taskList(): TaskListItem[] {
    return TaskListPresenter(this.tasks);
  }

  async createTask(task: NewTask) {
    const c: CreateTaskInteractor = new TaskCreater(taskRepository);
    const t = await c.handle(task);
    this.tasks.push(t);
    this.newTask = new NewTask();
  }

  protected created() {
    this.initTaskList();
  }

  private tasks: Task[] = [];

  private async initTaskList() {
    const q = new TaskSearcher(taskRepository);
    this.tasks = await q.handle();
  }
}
</script>
