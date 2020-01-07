import Vue from "vue";
import VueRouter, { RouterOptions } from "vue-router";
import Container from "../views/Container.vue";

//Dashboard
import Dashboard from "@/views/Dashboard/Dashboard.vue";

// Categories
import CategoriesList from '@/components/Categories/CategoriesList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: Container,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: 'categories',
        name: 'CategoriesList',
        component: CategoriesList,
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
} as RouterOptions);

export default router;
