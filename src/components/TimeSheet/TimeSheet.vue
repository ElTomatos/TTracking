<template>
  <ul class="list-unstyled timesheet">
    <TimeSheetItem v-for="item in items" :item="item" :key="item.toString()" />
  </ul>
</template>

<script lang="ts">
/**
 * Vendor
 */
import { Component, Vue } from "vue-property-decorator";

/**
 * Components
 */
import TimeSheetItem from "@/components/TimeSheetItem/TimeSheetItem.vue";

/**
 * Expo
 */
@Component({
  components: {
    TimeSheetItem
  }
})
export default class TimeSheet extends Vue {
  items: Date[] = [new Date("01/01/1988"), new Date("01/01/2019")];
}
</script>
