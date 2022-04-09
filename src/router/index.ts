import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Cloudy, Menu, BrushFilled, Box } from '@element-plus/icons-vue'

import pri from "@/pages/Blockchain/principle/index.vue"


const routesPage: RouteRecordRaw[] = [
    {
        path: "/WebGPU",
        name: "WebGPU",
        icon: () => ({template: '<el-icon><brush-filled /></el-icon>'}),
        component: () => import("../pages/WebGPU/index.vue"),
        children: [
            {
                path: "principle",
                name: "原理",
                component: () => import("../pages/WebGPU/principle/index.vue"),
            },
            {
                path: "practice",
                name: "实践",
                component: () => import("@/pages/WebGPU/practice/index.vue"),
            },
        ]
    },
    {
        path: "/HighInTheClouds",
        name: "云上",
        icon: () => ({template: '<el-icon><cloudy /></el-icon>'}),
        component: () => import("@/pages/HighInTheClouds/index.vue"),
        children: [
            {
                path: "principle",
                name: "原理",
                component: () => import("@/pages/HighInTheClouds/principle/index.vue"),
            },
            {
                path: "practice",
                name: "实践",
                component: () => import("@/pages/HighInTheClouds/practice/index.vue"),
            },
        ]
    },
    {
        path: "/Blockchain",
        name: "区块链",
        icon: () => ({ template: '<el-icon><box /></el-icon>' }),
        // icon: () => ({ template: '<el-icon><box /></el-icon>' }),
        component: () => import("@/pages/Blockchain/index.vue"),
        children: [
            {
                path: "principle",
                name: "原理",
                // component: () => import("@/pages/Blockchain/principle/index.vue"),
                component: pri,
            },
            {
                path: "practice",
                name: "实践",
                component: () => import("@/pages/Blockchain/practice/index.vue"),
            },
        ]
    },
];

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "@/pages/Home/index.vue"),
    },
    {
        path: "/Error",
        name: "error",
        component: () => import(/* webpackChunkName: "Eror" */ "@/pages/Error/index.vue"),
    },
    ...routesPage,
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

export { routesPage };
