import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'demo',
    component: () => import('../views/DemoView.vue'),
    meta: {
      title: '组件客户端代码示例',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
