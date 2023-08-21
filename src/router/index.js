import { createRouter, createWebHistory } from 'vue-router'
import CreateTask from "../components/CreateTask.vue"
import ReadTaskView from "../views/ReadTaskView.vue"
const routes = [
  {
    path: '/',
    name: 'create',
    component: CreateTask
  },
  {
    path: '/readtaskview',
    name: 'readtask',
    component: ReadTaskView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router