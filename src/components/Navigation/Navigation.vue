<template>
  <v-list dense>
    <NavigationItem
      v-for="navItem in nav"
      :key="navItem.link"
      :to="navItem.link"
      :title="navItem.title"
      :icon="navItem.icon"
    />
  </v-list>
</template>

<script lang="ts">
/**
 * Vendors
 */
import { Component, Vue } from "vue-property-decorator";

/**
 * Config
 */
import { nav } from "../../config/nav";

/**
 * Typings
 */
import { INavItem } from "@/config/interfaces.d.ts";

/**
 * Components
 */
import NavigationItem from "./NavigationItem.vue";

/**
 * Expo
 */
@Component({
  components: { NavigationItem }
})
class Navigation extends Vue {
  nav: INavItem[] = nav;
}
export default Navigation;
</script>
