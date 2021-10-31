import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "SuspenseSimple",
    component: () => import("../views/SuspenseSimple.vue"),
  },
  {
    path: "/suspense-route",
    name: "SuspenseRoute",
    component: () => import("../views/SuspenseRoute.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
