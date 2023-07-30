import { createRouter, createWebHistory } from "vue-router";
import RequestView from "../views/RequestView.vue";

const routes = [
  {
    path: "/",
    name: "request",
    component: RequestView,
  },
  {
    path: "/addrequest",
    name: "addrequest",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddRequestView.vue"),
  },
  {
    path: "/singlerequest/:id",
    name: "singleRequest",
    component: () => import("../views/SingleRequestView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
