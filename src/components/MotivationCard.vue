<template>
  <div v-if="motivation" class="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4 mb-4">
    <div class="flex items-center justify-center mb-2">
      <Heart class="text-red-500 w-5 h-5 mr-2" />
      <span class="font-semibold text-gray-800">오늘의 격려</span>
    </div>
    <p class="text-gray-700 text-sm leading-relaxed mb-3">
      {{ motivation }}
    </p>
    <div class="flex items-center justify-center">
      <Calendar class="w-4 h-4 mr-2 text-indigo-500" />
      <span class="text-xs text-gray-600 font-medium">매일 다른 내용으로 생성됩니다</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Heart } from 'lucide-vue-next'

interface Props {
  motivation: string
}

defineProps<Props>()
</script>