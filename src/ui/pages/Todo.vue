<template>
  <div>
    <h1>
      {{ task ? task.id : "" }}
      {{ task ? task.title : "" }}
    </h1>
    <form @submit.prevent="createTask">
      <input type="text" v-model="title" />
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
import TaskApi from "@/api/taks-api";

@Component
export default class Todo extends Vue {
  task: Task | null = null;
  title: string = "";

  async createTask() {
    const svc = new TaskCreater(new TaskApi());
    const res = await svc.exec({ title: this.title });
    this.task = res.task;
    this.title = "";
  }
}
</script>
