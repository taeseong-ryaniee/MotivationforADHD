<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 shadow-lg">
    <div class="max-w-md mx-auto">
      <div class="flex justify-around items-center">
        <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="flex flex-col items-center py-2 px-3 rounded-lg transition-colors duration-200"
            :class="[
            currentPath === item.path
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          ]"
        >
          <component
              :is="item.icon"
              class="w-5 h-5 mb-1"
          />
          <span class="text-xs font-medium">{{ item.label }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Home, FileText, History, Settings } from 'lucide-vue-next'

const route = useRoute()

// 안전하게 현재 경로 가져오기
const currentPath = computed(() => {
  return route?.path || '/'
})

const navigationItems = [
  {
    name: 'home',
    path: '/',
    label: '홈',
    icon: Home
  },
  {
    name: 'note',
    path: '/note',
    label: '노트',
    icon: FileText
  },
  {
    name: 'history',
    path: '/history',
    label: '히스토리',
    icon: History
  },
  {
    name: 'settings',
    path: '/settings',
    label: '설정',
    icon: Settings
  }
]
</script>