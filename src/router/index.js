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
    component: () => import("../views/AddRequestView.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("token")) {
        // User is not logged in, show the alert and redirect to the login page
        alert("You must login to post.");
        next("/login");
      } else {
        // User is logged in, proceed to the Add Requests page
        next();
      }
    },
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
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
