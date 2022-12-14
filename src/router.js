import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    name: 'submitSurvey',
    path: '/submit-survey/:surveyId',
    component: () => import('./views/SubmitSurvey.vue'),
    props: true
  },
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
