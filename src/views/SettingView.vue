<template>
  <div class="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-6">
    <div class="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold text-gray-800">설정</h1>
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

      <div class="space-y-6">
        <!-- 알림 설정 -->
        <div class="bg-gray-50 rounded-lg p-4">
          <div class="flex items-center mb-3">
            <Bell class="w-5 h-5 text-blue-500 mr-2" />
            <h3 class="font-medium text-gray-800">알림 설정</h3>
          </div>

          <div class="space-y-3">
            <label class="flex items-center justify-between">
              <span class="text-sm text-gray-700">아침 격려 알림</span>
              <input
                  type="checkbox"
                  v-model="settings.morningNotification"
                  class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>

            <div v-if="settings.morningNotification" class="ml-4">
              <label class="block text-xs text-gray-600 mb-1">알림 시간</label>
              <input
                  type="time"
                  v-model="settings.notificationTime"
                  class="text-sm border border-gray-300 rounded px-2 py-1"
              />
            </div>
          </div>
        </div>

        <!-- 개인화 설정 -->
        <div class="bg-gray-50 rounded-lg p-4">
          <div class="flex items-center mb-3">
            <User class="w-5 h-5 text-green-500 mr-2" />
            <h3 class="font-medium text-gray-800">개인화</h3>
          </div>

          <div class="space-y-3">
            <div>
              <label class="block text-sm text-gray-700 mb-1">닉네임</label>
              <input
                  type="text"
                  v-model="settings.nickname"
                  placeholder="산만이"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label class="block text-sm text-gray-700 mb-1">주요 관심사</label>
              <input
                  type="text"
                  v-model="settings.interests"
                  placeholder="업무, 공부, 운동 등"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>

        <!-- 데이터 관리 -->
        <div class="bg-gray-50 rounded-lg p-4">
          <div class="flex items-center mb-3">
            <Database class="w-5 h-5 text-purple-500 mr-2" />
            <h3 class="font-medium text-gray-800">데이터 관리</h3>
          </div>

          <div class="space-y-2">
            <BaseButton
                variant="outline"
                size="sm"
                :fullWidth="true"
                @click="exportData"
            >
              <template #icon>
                <Download class="w-4 h-4" />
              </template>
              데이터 내보내기
            </BaseButton>

            <BaseButton
                variant="outline"
                size="sm"
                :fullWidth="true"
                @click="clearData"
            >
              <template #icon>
                <Trash2 class="w-4 h-4" />
              </template>
              모든 데이터 삭제
            </BaseButton>
          </div>
        </div>

        <!-- 저장 버튼 -->
        <BaseButton
            variant="primary"
            size="lg"
            :fullWidth="true"
            @click="saveSettings"
        >
          <template #icon>
            <Save class="w-5 h-5" />
          </template>
          설정 저장
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Bell, User, Database, Download, Trash2, Save } from 'lucide-vue-next'
import BaseButton from '../components/ui/BaseButton.vue'

const router = useRouter()

interface Settings {
  morningNotification: boolean
  notificationTime: string
  nickname: string
  interests: string
}

const settings = ref<Settings>({
  morningNotification: false,
  notificationTime: '08:00',
  nickname: '',
  interests: ''
})

const loadSettings = () => {
  const savedSettings = localStorage.getItem('appSettings')
  if (savedSettings) {
    try {
      Object.assign(settings.value, JSON.parse(savedSettings))
    } catch (error) {
      console.error('설정 로드 오류:', error)
    }
  }
}

const saveSettings = () => {
  localStorage.setItem('appSettings', JSON.stringify(settings.value))
  alert('⚙️ 설정이 저장되었습니다!')
}

const exportData = () => {
  const data = {
    settings: settings.value,
    notes: localStorage.getItem('todayNote'),
    motivation: localStorage.getItem('todayMotivation')
  }

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `morning-app-data-${new Date().toISOString().split('T')[0]}.json`
  a.click()
  URL.revokeObjectURL(url)
}

const clearData = () => {
  if (confirm('⚠️ 모든 데이터가 삭제됩니다. 계속하시겠습니까?')) {
    localStorage.clear()
    alert('🗑️ 모든 데이터가 삭제되었습니다.')
    router.push('/')
  }
}

onMounted(() => {
  loadSettings()
})
</script>