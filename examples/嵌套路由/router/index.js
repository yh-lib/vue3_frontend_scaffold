import { createRouter,createWebHashHistory } from 'vue-router'

// step2：定义路由映射
const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/user/:id',
    component: () => import('../views/userInfo/User.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: () => import('../views/userInfo/UserProfile.vue'),
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: () => import('../views/userInfo/UserPosts.vue'),
      },
    ],
  },
]

// step3：实例化路由 router 并对外暴露
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})