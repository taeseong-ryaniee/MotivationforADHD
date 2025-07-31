<template>
  <div class="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-6">
    <div class="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-gray-800">노트 히스토리</h1>
        <BaseButton
            variant="ghost"
            size="sm"
            @click="router.back()"
        >
          <template #icon>
            <ArrowLeft class="w-4 h-4" />
          </template>
          돌아가기
        </BaseButton>
      </div>

      <div v-if="noteHistory.length === 0" class="text-center py-12">
        <Calendar class="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p class="text-gray-500 mb-2">아직 생성된 노트가 없습니다</p>
        <p class="text-sm text-gray-400">첫 번째 격려 노트를 만들어보세요!</p>
        <BaseButton
            variant="primary"
            size="md"
            class="mt-4"
            @click="router.push('/')"
        >
          노트 만들기
        </BaseButton>
      </div>

      <div v-else class="space-y-4">
        <div
            v-for="note in noteHistory"
            :key="note.date"
            class="bg-gray-50 rounded-lg p-4 border hover:shadow-md transition-shadow"
        >
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-medium text-gray-800">{{ note.date }}</h3>
            <span class="text-xs text-gray-500">{{ note.createdAt }}</span>
          </div>

          <div class="bg-white rounded-lg p-3 mb-3">
            <p class="text-sm text-gray-700 line-clamp-3">
              {{ note.content.substring(0, 120) }}...
            </p>
          </div>

          <div class="flex space-x-2">
            <BaseButton
                variant="outline"
                size="sm"
                @click="viewNote(note)"
            >
              <template #icon>
                <Eye class="w-4 h-4" />
              </template>
              보기
            </BaseButton>

            <BaseButton
                variant="ghost"
                size="sm"
                @click="copyNote(note.content)"
            >
              <template #icon>
                <Copy class="w-4 h-4" />
              </template>
              복사
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Calendar, ArrowLeft, Eye, Copy } from 'lucide-vue-next'
import BaseButton from '../components/ui/BaseButton.vue'
import type { NoteData } from '../types'

const router = useRouter()
const noteHistory = ref<NoteData[]>([])

const loadHistory = () => {
  // 실제로는 localStorage나 API에서 히스토리를 불러옴
  // 지금은 데모용 데이터
  noteHistory.value = []
}

const viewNote = (note: NoteData) => {
  // 특정 노트 보기 (modal이나 새 페이지)
  alert(`${note.date} 노트를 봅니다`)
}

const copyNote = async (content: string) => {
  try {
    await navigator.clipboard.writeText(content)
    alert('📋 클립보드에 복사되었습니다!')
  } catch (error) {
    alert('복사 중 오류가 발생했습니다.')
  }
}

onMounted(() => {
  loadHistory()
})
</script>