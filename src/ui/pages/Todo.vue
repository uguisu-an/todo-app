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

@Component
export default class Todo extends Vue {
  title: string = "";

  get tasks(): Task[] {
    return this.$store.state.tasks;
  }

  created() {
    this.initTaskList();
  }

  async initTaskList() {
    if (this.tasks.length) return;
    await this.$store.dispatch("getTaskList");
  }

  async createTask() {
    await this.$store.dispatch("createTask", { title: this.title });
    this.title = "";
  }
}
</script>
