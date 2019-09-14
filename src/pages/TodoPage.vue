<template>
  <todo
    v-bind="{ newTask, taskList, projectList }"
    v-on="{ createTask }"
  ></todo>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import TaskCreater from "@/lib/interactors/task-creator";
import TaskSearcher from "@/lib/interactors/task-searcher";
import TaskApi from "@/api/task-api";
import NewTask from "@/models/new-task";
import TaskListItem from "@/models/task-list-item";
import ProjectListItem from "@/models/project-list-item";
import TaskListPresenter from "@/presenters/task-list-presenter";
import Task from "@/lib/models/task";

import Todo from "@/templates/Todo.vue";
import CreateTaskInteractor from "@/lib/usecases/create-task";
import ListTaskInteractor from "@/lib/usecases/list-task";
import TaskRepository from "@/lib/gateways/task-repository";

const client = Axios.create({ baseURL: "http://localhost:3000" });
const taskRepository: TaskRepository = new TaskApi(client);

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

  get projectList(): ProjectListItem[] {
    return [
      {
        key: "1",
        name: "Chores"
      },
      {
        key: "2",
        name: "Errands"
      }
    ];
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
    const q: ListTaskInteractor = new TaskSearcher(taskRepository);
    this.tasks = await q.handle();
  }
}
</script>
