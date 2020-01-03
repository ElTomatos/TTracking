<template>
  <v-app id="ttracking">
    <v-navigation-drawer v-model="drawer" app clipped>
      <Navigation />
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.prevent="toggleDrawer" />
      <v-toolbar-title>TTracking</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center
          ><router-view></router-view
        ></v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
/**
 * Vendor
 */
import Vue from "vue";
import Component from "vue-class-component";

/**
 * Components
 */
import Navigation from "@/components/Navigation/Navigation.vue";

/**
 * Expo
 */
@Component({
  components: {
    Navigation
  }
})
class Container extends Vue {
  drawer: boolean = false;
  toggleDrawer(): void {
    this.drawer = !this.drawer;
  }
}
export default Container;
</script>
