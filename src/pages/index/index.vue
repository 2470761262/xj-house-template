<style lang="scss" scoped>
view {
  color: $thin-back-color;
}
</style>
<template>
  <view> HELLO WORD 2{{ a }}/{{ x }}</view>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  public a: number = 5;
  private x: number = 7;

  onLoad() {}
}
</script>
