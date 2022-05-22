import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { Route } from "../utility/constant";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: Route.Home,
    component: () => import("../components/Homepage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
