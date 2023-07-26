// createRouter创建路由，管理多个路由
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { App } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        component: () => import("@/pages/home/index.vue")
    },
    {
        path: '/hospital',
        component: () => import("@/pages/hospital/index.vue")
    },
    {
        path: '/',
        redirect: '/home'
    }
]

const router = createRouter({
    // 路由模式设置
    history: createWebHashHistory(),
    // 管理路由
    routes
})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}

