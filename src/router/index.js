// 基础导入
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import { createRouter,createWebHashHistory } from "vue-router";

// 定义 /login 路由
const loginRoute = {
    path: "/login",
    component: () => import('../view/Login.vue'),
}

const listRoutes = {

}



const routes = [
   loginRoute,
]

const router = createRouter({
        history: createWebHashHistory(),
        routes,
})

export default router