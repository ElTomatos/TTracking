<template>
  <div>
    <CreateCategory />
    <v-list>
      <v-list-item v-for="category in categories" :key="category.id">
        <v-list-item-content>
          <v-list-item-title>{{ category.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
/**
 * Vendors
 */
import { Component, Vue } from "vue-property-decorator";

/**
 * Components
 */
import CreateCategory from "@/components/Categories/CreateCategory.vue";

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
@Component({ components: { CreateCategory } })
class CategoriesList extends Vue {
  private get categories() {
    return categoriesState.categories;
  }

  created() {
    categoriesState.getCategories();
  }
}

export default CategoriesList;
</script>
