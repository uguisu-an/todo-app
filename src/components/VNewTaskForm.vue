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
import NewTaskForm from "@/models/new-task-form";

@Component
export default class VNewTaskForm extends Vue {
  @Prop({ default: () => new NewTaskForm() }) task!: NewTaskForm;

  submit() {
    this.$emit("create", this.task);
  }
}
</script>
