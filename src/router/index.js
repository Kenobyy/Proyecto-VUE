import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    */
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/ComponenteContador.vue'),
    },
     {
      path: '/Lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../components/ListaDeTareas.vue'),
    },
  ],
})

export default router
