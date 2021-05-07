import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
import NewEvent from "../views/NewEvent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/new",
    name: "newevent",
    component: NewEvent,
  },
  {
    path: "/event/:id",
    name: "event",
    component: Event,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
