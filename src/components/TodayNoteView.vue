<template>
  <div>
    <!-- 오늘 노트 보기 화면 -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-gray-800">오늘의 격려 노트</h2>
      <button
          @click="$emit('back')"
          class="text-blue-500 hover:text-blue-700 font-medium flex items-center space-x-1"
      >
        <ArrowLeft class="w-4 h-4" />
        <span>돌아가기</span>
      </button>
    </div>

    <div v-if="todayNote" class="space-y-4">
      <div class="bg-gray-50 rounded-lg p-4 border">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-medium text-gray-800">{{ todayNote.date }}</h3>
          <span class="text-xs text-gray-500">{{ todayNote.createdAt }}</span>
        </div>

        <div class="bg-white rounded-lg p-4 mb-4">
          <pre class="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">{{ todayNote.content }}</pre>
        </div>

        <button
            @click="$emit('copy-content', todayNote.content)"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 px-4 font-medium transition-colors flex items-center justify-center space-x-2"
        >
          <Copy class="w-4 h-4" />
          <span>클립보드에 복사하기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, Copy } from 'lucide-vue-next'
import type { NoteData } from '../types'

interface Props {
  todayNote: NoteData | null
}

defineProps<Props>()

defineEmits<{
  'back': []
  'copy-content': [content: string]
}>()
</script>