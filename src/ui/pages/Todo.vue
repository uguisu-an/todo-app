<template>
  <div>
    <h1>
      {{ task ? task.title : "" }}
    </h1>
    <button type="button" @click="createTask">
      + Add Task
    </button>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import createTask from "@/core/services/create-task-service";
import Task from "../../core/entities/task";

@Component
export default class Todo extends Vue {
  task: Task | null = null;

  createTask() {
    const res = createTask({ title: "Call John" });
    this.task = res.task;
  }
}
</script>
