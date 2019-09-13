<template>
  <div>
    <v-task-list>
      <v-task-list-item
        v-for="t in taskList"
        v-bind="t"
        :key="t.key"
      ></v-task-list-item>
    </v-task-list>
    <v-new-task-form
      v-bind="{ task: newTask }"
      v-on="{ submit }"
    ></v-new-task-form>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import NewTask from "@/models/new-task";
import TaskListItem from "@/models/task-list-item";
import VTaskList from "../components/VTaskList.vue";
import VTaskListItem from "../components/VTaskListItem.vue";
import VNewTaskForm from "@/components/VNewTaskForm.vue";

@Component({
  components: {
    VTaskList,
    VTaskListItem,
    VNewTaskForm
  }
})
export default class Todo extends Vue {
  @Prop({ default: () => new NewTask() }) newTask!: NewTask;
  @Prop({ default: () => [] }) taskList!: TaskListItem[];

  async submit(newTask: NewTask) {
    this.$emit("createTask", newTask);
  }
}
</script>
