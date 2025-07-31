<template>
  <div class="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-6 pb-20">
    <div class="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <TodayNoteView
          :todayNote="noteStore.todayNote"
          @back="router.back()"
          @copy-content="handleCopyContent"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import TodayNoteView from '../components/TodayNoteView.vue'
import { useNoteStore } from '../stores/useNoteStore'

const router = useRouter()
const noteStore = useNoteStore()

const handleCopyContent = async (content: string) => {
  try {
    await noteStore.copyToClipboard(content)
    alert('📋 클립보드에 복사되었습니다!')
  } catch (error) {
    alert('복사 중 오류가 발생했습니다.')
  }
}
</script>