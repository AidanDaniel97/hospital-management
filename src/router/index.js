import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.path === "/logout") {
    // Redirect to login and clear authentication
    store.dispatch("auth/logout");
    next("/");
  } else if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (!store.getters["auth/getIsAuthenticated"]) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
