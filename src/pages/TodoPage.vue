<template>
  <todo v-bind="{ newTask, taskList }" v-on="{ create }"></todo>
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

  protected created() {
    this.initTaskList();
  }

  private tasks: Task[] = [];

  async initTaskList() {
    const res = await new TaskSearcher(taskRepository).handle({});
    this.tasks = res.tasks;
  }

  async create(task: NewTask) {
    const res = await new TaskCreater(taskRepository).handle(task);
    this.tasks.push(res);
    this.newTask = new NewTask();
  }
}
</script>
