<template>
  <div class="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-6 pb-20">
    <div class="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <MainScreen
          :todayMotivation="noteStore.todayMotivation"
          :specialEvent="noteStore.specialEvent"
          :isCreating="noteStore.isCreating"
          :lastCreated="noteStore.lastCreated"
          @update:specialEvent="noteStore.updateSpecialEvent"
          @create-daily-note="handleCreateNote"
          @show-today-note="router.push('/note')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MainScreen from '../components/MainScreen.vue'
import { useNoteStore } from '../stores/useNoteStore'

const router = useRouter()
const noteStore = useNoteStore()

const handleCreateNote = async () => {
  try {
    await noteStore.createDailyNote()
    // 성공 시 노트 페이지로 이동
    router.push('/note')
  } catch (error) {
    alert('노트 생성 중 오류가 발생했습니다. 다시 시도해주세요.')
  }
}

onMounted(() => {
  noteStore.initialize()
})
</script>