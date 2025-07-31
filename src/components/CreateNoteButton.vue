<template>
  <GradientButton
      gradient="green-blue"
      size="lg"
      :disabled="isCreating"
      :fullWidth="true"
      @click="$emit('click')"
  >
    <template #icon>
      <LoadingSpinner v-if="isCreating" color="blue" />
      <CheckCircle v-else class="w-5 h-5 text-green-500" />
    </template>
    {{ isCreating ? '노트 생성 중...' : '오늘 하루 시작!' }}
  </GradientButton>
</template>

<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next'
import GradientButton from './ui/GradientButton.vue'
import LoadingSpinner from './ui/LoadingSpinner.vue'

interface Props {
  isCreating: boolean
}

defineProps<Props>()

defineEmits<{
  'click': []
}>()
</script>