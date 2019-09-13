<template>
  <li is="b-list-group-item">
    {{ name }}
  </li>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class VProjectListItem extends Vue {
  @Prop({ default: "" }) name!: string;
}
</script>
