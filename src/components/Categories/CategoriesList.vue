<template>
  <v-list>
    <v-list-item v-for="category in categories" :key="category.id">
      <v-list-item-content>
        <v-list-item-title>{{category.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
/**
 * Vendors
 */
import { Component, Vue } from "vue-property-decorator";

/**
 * Store
 */
import store from "@/store/index";
import { getModule } from "vuex-module-decorators";
import Categories from "@/store/categories";

const categoriesState = getModule(Categories);

/**
 * Expo
 */
@Component
class CategoriesList extends Vue {
  private get categories() {
    return categoriesState.categories;
  }
}

export default CategoriesList;
</script>
