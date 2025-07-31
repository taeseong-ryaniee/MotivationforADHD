<template>
  <div id="app">
    <router-view />
    <NavigationBar v-if="showNavigation && isRouterReady" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'

const route = useRoute()
const isRouterReady = ref(false)

// 네비게이션을 표시할 라우트 결정
const showNavigation = computed(() => {
  // 필요에 따라 특정 페이지에서만 네비게이션 표시
  return true
})

onMounted(() => {
  // router가 초기화된 후 네비게이션 표시
  isRouterReady.value = true
})
</script>

<style>
#app {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 한국어 폰트 최적화 */
body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #1f2937;
}

/* 스크롤바 스타일링 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* 선택 영역 스타일링 */
::selection {
  background: #dbeafe;
  color: #1e40af;
}

/* 포커스 스타일 통일 */
*:focus {
  outline: none;
}

/* 텍스트 줄바꿈 유틸리티 */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>