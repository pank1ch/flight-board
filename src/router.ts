import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
import FlightsPage from "./pages/flightsPage.vue";
import UsersPage from "./pages/UsersPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          redirect: '/flights'
        },
        {
          path: 'flights',
          component: FlightsPage
        },
        {
          path: 'users',
          component: UsersPage
        }
      ]
    }
  ]
})
