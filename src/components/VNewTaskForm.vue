<template>
  <b-form @submit.prevent="submit">
    <b-input-group>
      <b-input type="text" v-model="task.title" required></b-input>
      <b-input-group-append>
        <b-button type="submit" variant="primary">
          Add Task
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import NewTask from "@/models/new-task";

@Component
export default class VNewTask extends Vue {
  @Prop({ default: () => new NewTask() }) task!: NewTask;

  submit() {
    this.$emit("submit", this.task);
  }
}
</script>
