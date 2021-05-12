import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
<<<<<<< HEAD
=======
import NewEvent from "../views/NewEvent.vue";
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
<<<<<<< HEAD
    path: "/:id",
=======
    path: "/new",
    name: "newevent",
    component: NewEvent,
  },
  {
    path: "/event/:id",
>>>>>>> 506f61c3b5ae615afad28bfe51aefdd2eb41d9c2
    name: "event",
    component: Event,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
