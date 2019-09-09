<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="req.title" required />
    <button>
      + Add Task
    </button>
  </form>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import { CreateTaskRequest } from "../../core/usecases/create-task";

@Component
export default class CreateTaskForm extends Vue {
  @Prop({ default: () => ({ title: "" }) }) req!: CreateTaskRequest;

  submit() {
    this.$emit("create", this.req);
  }
}
</script>
