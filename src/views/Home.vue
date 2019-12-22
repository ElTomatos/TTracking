<template>
  <div class="home">
    <h1 class="page-title">TTrackiing</h1>
    <TimeSheet />
  </div>
</template>

<script lang="ts">
/**
 * Components
 */
import TimeSheet from "@/components/TimeSheet/TimeSheet.vue";

/**
 * Export
 */
export default {
  name: "home",
  components: {
    TimeSheet
  }
};
</script>
