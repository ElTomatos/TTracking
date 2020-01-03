<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list dense>
      <v-list-item to="/dashboard">
        <v-list-item-action>
          <v-icon>view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Dashboard
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="timesheet">
        <v-list-item-action>
          <v-icon>clock-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Timesheet
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
/**
 * Vendor
 */
import Vue from "vue";
import Component from "vue-class-component";

/**
 * Expo
 */
@Component
class Drawer extends Vue {
  drawer: boolean = true;
  toggleDrawer(): void {
    this.drawer = !this.drawer;
  }
}
export default Drawer;
</script>
