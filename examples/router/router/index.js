// 创建路由实例

// 导入创建路由的方法
import { createWebHashHistory, createRouter } from 'vue-router'
// step1: 导入需要路由的组件
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// step11: 导入动态路由需要的组件
import User from '../views/User.vue'

// step2: 定义路由映射
const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    // step12: 动态字段以冒号开始
    // 传递单个参数
    { path: '/user/:username', component: User, name: 'user' },
    // 传递多个参数
    // { path: '/user/:username/post/:userid', component: User },
]

// step3: 实例化路由并对外暴露
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})