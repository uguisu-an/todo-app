<template>
  <li is="b-list-group-item" class="task-list-item">
    {{ title }}
  </li>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class VTaskListItem extends Vue {
  @Prop({ default: "" }) title!: string;
}
</script>
