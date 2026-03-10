export const userRoutes = {
    path: "/user",
    component: () => import('../view/layout/Layout.vue'),  
    children:[
        {
            path: "add",
            component: () => import('../view/user/Add.vue'),    
        },
        {
            path: "list",
            component: () => import('../view/user/List.vue'),    
        },
    ]
}