import { createWebHistory, createRouter } from "vue-router";
import CreateComponents from "@/components/CreateComponents.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CreateComponents,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;