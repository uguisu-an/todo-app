<template>
  <b-row>
    <b-col md="4">
      <h5>Project List</h5>
      <v-project-list>
        <v-project-list-item
          v-for="p in projectList"
          v-bind="p"
          :key="p.key"
        ></v-project-list-item>
      </v-project-list>
    </b-col>
    <b-col>
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
        class="mt-3"
      ></v-new-task-form>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import NewTask from "@/models/new-task";
import TaskListItem from "@/models/task-list-item";
import ProjectListItem from "@/models/project-list-item";
import VTaskList from "../components/VTaskList.vue";
import VTaskListItem from "../components/VTaskListItem.vue";
import VNewTaskForm from "@/components/VNewTaskForm.vue";
import VProjectList from "../components/VProjectList.vue";
import VProjectListItem from "../components/VProjectListItem.vue";

@Component({
  components: {
    VProjectList,
    VProjectListItem,
    VTaskList,
    VTaskListItem,
    VNewTaskForm
  }
})
export default class Todo extends Vue {
  @Prop({ default: () => new NewTask() }) newTask!: NewTask;
  @Prop({ default: () => [] }) taskList!: TaskListItem[];
  @Prop({ default: () => [] }) projectList!: ProjectListItem[];

  async submit(newTask: NewTask) {
    this.$emit("createTask", newTask);
  }
}
</script>
