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

<script>
/**
 * Config
 */
import { nav } from "../../config/nav";

/**
 * Components
 */
import NavigationItem from "./NavigationItem.vue";

/**
 * Expo
 */
export default {
  name: "Navigation",
  data() {
    return {
      nav
    };
  },
  components: {
    NavigationItem
  }
};
</script>
