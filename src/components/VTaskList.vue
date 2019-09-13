<template>
  <ul is="b-list-group" class="task-list">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class VTaskList extends Vue {}
</script>
