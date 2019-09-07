<template>
  <div>
    <ol>
      <li v-for="t in tasks" :key="t.id">
        {{ t.title }}
      </li>
    </ol>
    <form @submit.prevent="createTask">
      <input type="text" v-model="title" required />
      <button>
        + Add Task
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Task from "@/core/entities/task";
import TaskCreater from "@/core/apps/task-creater";
import TaskLoader from "@/core/apps/task-loader";
import TaskApi from "@/api/task-api";

@Component
export default class Todo extends Vue {
  tasks: Task[] = [];
  title: string = "";

  created() {
    this.loadTaskList();
  }

  async loadTaskList() {
    const app = new TaskLoader(new TaskApi());
    const res = await app.exec();
    this.tasks = res.tasks;
  }

  async createTask() {
    const svc = new TaskCreater(new TaskApi());
    const res = await svc.exec({ title: this.title });
    this.tasks.push(res.task);
    this.title = "";
  }
}
</script>
