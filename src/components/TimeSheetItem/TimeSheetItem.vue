<template>
  <li class="timesheet-item-value">{{ dateString }}</li>
</template>

<script lang="ts">
/**
 * Vendor
 */
import { Prop, Vue, Component } from "vue-property-decorator";

/**
 * Expo
 */
@Component
export default class TimeSheetItem extends Vue {
  @Prop() item!: Date;

  get dateString() {
    return this.item.toLocaleDateString();
  }
}
</script>

<style src="./style.scss" lang="scss" />
