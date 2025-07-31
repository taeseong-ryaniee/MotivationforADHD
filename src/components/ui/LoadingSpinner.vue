<template>
  <div :class="spinnerClasses"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  color?: 'blue' | 'white' | 'gray' | 'green'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'blue'
})

const spinnerClasses = computed(() => {
  const baseClasses = 'animate-spin rounded-full border-b-2'

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  const colorClasses = {
    blue: 'border-blue-500',
    white: 'border-white',
    gray: 'border-gray-500',
    green: 'border-green-500'
  }

  return [
    baseClasses,
    sizeClasses[props.size],
    colorClasses[props.color]
  ].join(' ')
})
</script>