import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
import NewEvent from "../views/NewEvent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { transition: "fade" },
  },
  {
    path: "/new",
    name: "newevent",
    component: NewEvent,
    meta: { transition: "slide" },
  },
  {
    path: "/event/:id",
    name: "event",
    component: Event,
    meta: { transition: "fade" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
