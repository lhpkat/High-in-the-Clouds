import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
    RouteRecordRaw,
} from 'vue-router';
import { Cloudy, Menu, BrushFilled, Box } from '@element-plus/icons-vue'


const routesPage: RouteRecordRaw[] = [

    {
        path: '/HighInTheClouds',
        name: Symbol('云端'),
        title: '云端',
        icon: () => ({ template: '<el-icon><cloudy /></el-icon>' }),
        component: () => import('@/pages/HighInTheClouds/index.vue'),
        // component: { template: `<div>123</div>` },
        children: [
            {
                path: 'principle',
                name: Symbol('原理'),
                title: '原理',
                component: () => import('@/pages/HighInTheClouds/principle/index.vue'),
            },
            {
                path: 'practice',
                name: Symbol('实践'),
                title: '实践',
                component: () => import('@/pages/HighInTheClouds/practice/index.vue'),
            },
        ]
    },

    {
        path: '/WebGPU',
        name: Symbol('WebGPU'),
        title: 'WebGPU',
        icon: () => ({ template: '<el-icon><brush-filled /></el-icon>' }),
        component: () => import('../pages/WebGPU/index.vue'),
        children: [
            {
                path: 'principle',
                name: Symbol('原理'),
                title: '原理',
                component: async () => await import('@/pages/WebGPU/principle/index.vue'),
            },
            {
                path: 'practice',
                name: Symbol('实践'),
                title: '实践',
                component: () => import('@/pages/WebGPU/practice/index.vue'),
            },
        ]
    },

    {
        path: '/Blockchain',
        name: Symbol('区块链'),
        title: '区块链',
        icon: () => ({ template: '<el-icon><box /></el-icon>' }),
        component: () => import('@/pages/Blockchain/index.vue'),
        children: [
            {
                path: 'principle',
                name: Symbol('原理'),
                title: '原理',
                component: () => import('@/pages/Blockchain/principle/index.vue'),
            },
            {
                path: 'practice',
                name: Symbol('实践'),
                title: '实践',
                component: () => import('@/pages/Blockchain/practice/index.vue'),
            },
        ]
    },

    {
        path: '/log',
        name: Symbol('踩坑日志'),
        title: '踩坑日志',
        icon: () => ({ template: '<el-icon><box /></el-icon>' }),
        component: () => import('@/pages/Log/index.vue'),
        children: [
            {
                path: 'vue-router',
                name: Symbol('vue-router'),
                title: 'vue-router',
                component: () => import('@/pages/Log/vueRouter/index.vue'),
            },
        ]
    }

];

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: 'Home' */ '@/pages/Home/index.vue'),
    },
    {
        path: '/Error',
        name: 'error',
        component: () => import(/* webpackChunkName: 'Eror' */ '@/pages/Error/index.vue'),
    },
    ...routesPage,
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    // if (to.matched.length == 0) { router.push(to.path); }
    console.log('to', to);

    next()
})

export default router;

export { routesPage };
