<template>
  <button
      :class="buttonClasses"
      :disabled="disabled"
      @click="$emit('click')"
      :title="tooltip"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  tooltip?: string
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'ghost',
  size: 'md',
  disabled: false,
  rounded: true
})

defineEmits<{
  'click': []
}>()

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1'

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-300',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-300',
    ghost: 'hover:bg-gray-100 text-gray-700 focus:ring-gray-300'
  }

  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  }

  const roundedClass = props.rounded ? 'rounded-full' : 'rounded-lg'
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    roundedClass,
    disabledClass
  ].join(' ')
})
</script>