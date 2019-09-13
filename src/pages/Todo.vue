<template>
  <div>
    <v-task-list>
      <v-task-list-item
        v-for="t in tasks"
        v-bind="t"
        :key="t.key"
      ></v-task-list-item>
    </v-task-list>
    <v-new-task-form v-bind="{ task }" @create="create"></v-new-task-form>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import TaskCreater from "@/usecases/interactors/task-creator";
import TaskSearcher from "@/usecases/interactors/task-searcher";
import TaskRepository from "@/entities/repositories/task-repository";
import TaskApi from "@/api/task-api";
import VNewTaskForm from "@/components/VNewTaskForm.vue";
import NewTask from "@/models/new-task";
import VTaskList from "../components/VTaskList.vue";
import VTaskListItem from "../components/VTaskListItem.vue";
import TaskListItem from "@/models/task-list-item";
import TaskListPresenter from "@/presenters/task-list-presenter";
import Task from "@/usecases/models/task";

const client = Axios.create({ baseURL: "http://localhost:3000" });
const taskApi = new TaskApi(client);
const taskRepository = new TaskRepository(taskApi);

@Component({
  components: {
    VTaskList,
    VTaskListItem,
    VNewTaskForm
  }
})
export default class Todo extends Vue {
  task: NewTask = new NewTask();
  tasks: Task[] = [];

  get taskList(): TaskListItem[] {
    return TaskListPresenter(this.tasks);
  }

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
