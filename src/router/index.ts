import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
        meta: {
            title: '산만이의 아침'
        }
    },
    {
        path: '/note',
        name: 'Note',
        component: () => import('../views/NoteView.vue'),
        meta: {
            title: '오늘의 격려 노트'
        }
    },
    {
        path: '/history',
        name: 'History',
        component: () => import('../views/HistoryView.vue'),
        meta: {
            title: '노트 히스토리'
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/SettingView.vue'),
        meta: {
            title: '설정'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 페이지 타이틀 설정
router.beforeEach((to) => {
    document.title = to.meta.title as string || '산만이의 아침'
})

export default router