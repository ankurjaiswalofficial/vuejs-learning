import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PostView from '../views/PostView.vue';
import CreatePost from '../views/CreatePost.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView,
      props: true
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost
    }
  ]
});

export default router;