<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="task.title" required />
    <button>
      + Add Task
    </button>
  </form>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import NewTask from "@/models/new-task";

@Component
export default class VNewTask extends Vue {
  @Prop({ default: () => new NewTask() }) task!: NewTask;

  submit() {
    this.$emit("create", this.task);
  }
}
</script>
