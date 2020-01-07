/**
 * Vendors
 */
import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";

/**
 * Typings
 */
interface ICategory {
  readonly id: number;
  readonly title: string;
  readonly added: Date;
}

/**
 * Store
 */
import store from "@/store/index";

/**
 * Module
 */
@Module({ namespaced: true, name: "categories", dynamic: true, store })
class Categories extends VuexModule {
  categories: ICategory[] = [{ id: 1, title: "Some cat", added: new Date() }];

  @Mutation
  addCategoryMutation(category: ICategory): void {
    this.categories.push(category);
  }

  @Action
  addCategory(category: ICategory): void {
    const existedCategory: ICategory | undefined = this.categories.find(
      item => item.id === category.id
    );
    if (existedCategory) {
      //show alert
      return;
    }
    this.context.commit("addCategoryMutation", category);
  }

  get categoriesCount() {
    return this.categories.length;
  }
}

export default Categories;
