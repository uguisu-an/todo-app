<template>
  <ol is="b-list-group">
    <slot></slot>
  </ol>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class VProjectList extends Vue {}
</script>
