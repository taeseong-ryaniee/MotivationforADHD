<template>
  <div :class="gradientWrapperClasses">
    <button
        :class="buttonClasses"
        :disabled="disabled"
        @click="$emit('click')"
    >
      <slot name="icon" />
      <span v-if="$slots.default"><slot /></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  gradient?: 'green-blue' | 'pink-purple' | 'orange-red' | 'blue-purple'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  gradient: 'green-blue',
  size: 'md',
  disabled: false,
  fullWidth: false
})

defineEmits<{
  'click': []
}>()

const gradientWrapperClasses = computed(() => {
  const gradients = {
    'green-blue': 'bg-gradient-to-r from-green-400 to-blue-500',
    'pink-purple': 'bg-gradient-to-r from-pink-400 to-purple-500',
    'orange-red': 'bg-gradient-to-r from-orange-400 to-red-500',
    'blue-purple': 'bg-gradient-to-r from-blue-400 to-purple-500'
  }

  const widthClass = props.fullWidth ? 'w-full' : ''

  return [
    'rounded-xl p-1',
    gradients[props.gradient],
    widthClass
  ].join(' ')
})

const buttonClasses = computed(() => {
  const baseClasses = 'bg-white rounded-lg font-semibold text-gray-800 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50'

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  }

  const widthClass = props.fullWidth ? 'w-full' : ''
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return [
    baseClasses,
    sizeClasses[props.size],
    widthClass,
    disabledClass
  ].join(' ')
})
</script>