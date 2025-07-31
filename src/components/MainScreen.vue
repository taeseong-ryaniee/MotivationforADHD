<template>
  <div>
    <!-- 메인 화면 -->
    <div class="text-center">
      <div class="flex items-center justify-center mb-4">
        <Coffee class="text-amber-500 w-8 h-8 mr-2" />
        <h1 class="text-2xl font-bold text-gray-800">산만이의 아침</h1>
      </div>

      <MotivationCard :motivation="todayMotivation" />

      <p class="text-gray-600 text-sm">
        매일 다른 내용으로 당신만의 격려 노트를 만들어보세요
      </p>
    </div>

    <!-- 특별 일정 입력 -->
    <SpecialEventInput
        :modelValue="specialEvent"
        @update:modelValue="$emit('update:specialEvent', $event)"
    />

    <CreateNoteButton
        :isCreating="isCreating"
        @click="$emit('create-daily-note')"
    />

    <!-- 오늘 노트 보기 버튼 -->
    <div v-if="lastCreated" class="border-t pt-4">
      <BaseButton
          variant="secondary"
          size="md"
          :fullWidth="true"
          @click="$emit('show-today-note')"
      >
        <template #icon>
          <Eye class="w-4 h-4" />
        </template>
        오늘 생성한 노트 보기
      </BaseButton>
    </div>

    <div class="text-center text-xs text-gray-500 border-t pt-4">
      산만이의 정신없는 아침을 응원합니다<br />
      ✨ 당신은 잘하고 있어요 ✨
    </div>
  </div>
</template>

<script setup lang="ts">
import { Coffee, Eye } from 'lucide-vue-next'
import MotivationCard from './MotivationCard.vue'
import SpecialEventInput from './SpecialEventInput.vue'
import CreateNoteButton from './CreateNoteButton.vue'
import BaseButton from './ui/BaseButton.vue'

interface Props {
  todayMotivation: string
  specialEvent: string
  isCreating: boolean
  lastCreated: string | null
}

defineProps<Props>()

defineEmits<{
  'update:specialEvent': [value: string]
  'create-daily-note': []
  'show-today-note': []
}>()
</script>