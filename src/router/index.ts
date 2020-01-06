import Vue from "vue";
import VueRouter from "vue-router";
import Container from "../views/Container.vue";

//Dashboard
import Dashboard from "@/views/Dashboard/Dashboard.vue";

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
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
