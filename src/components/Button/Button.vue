<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="loading" class="mr-2">
      <i class="pi pi-spin pi-spinner"></i>
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  
  const disabledClass = props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : ''
  const widthClass = props.fullWidth ? 'w-full' : ''
  
  return [base, variants[props.variant], sizes[props.size], disabledClass, widthClass].join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
