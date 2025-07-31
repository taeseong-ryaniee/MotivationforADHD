<template>
  <button
      :class="buttonClasses"
      :disabled="disabled"
      @click="$emit('click')"
  >
    <slot name="icon" />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  fullWidth: false
})

defineEmits<{
  'click': []
}>()

const buttonClasses = computed(() => {
  const baseClasses = 'font-medium transition-all duration-200 flex items-center justify-center space-x-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1'

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-300',
    ghost: 'hover:bg-gray-100 text-gray-700 focus:ring-gray-300'
  }

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  }

  const widthClass = props.fullWidth ? 'w-full' : ''
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    widthClass,
    disabledClass
  ].join(' ')
})
</script>