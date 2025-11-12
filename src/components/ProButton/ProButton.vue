<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Icon only variant -->
    <template v-if="iconOnly">
      <slot />
    </template>
    
    <!-- Text with icons variant -->
    <template v-else>
      <slot name="iconLeft" />
      <span v-if="$slots.default" class="text-button">
        <slot />
      </span>
      <slot name="iconRight" />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ProButtonProps {
  variant?: 'primary' | 'secondary' | 'dark' | 'plain'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  iconOnly?: boolean
}

const props = withDefaults(defineProps<ProButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
  iconOnly: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-all focus:outline-none shadow-xs'
  
  // Icon only styling
  if (props.iconOnly) {
    const iconBase = 'w-8 h-8 flex items-center justify-center'
    const iconVariants = {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900',
      dark: 'bg-gray-900 hover:bg-black text-white',
      plain: 'text-gray-900 hover:bg-gray-100',
    }
    
    const disabledClass = props.disabled || props.loading 
      ? props.variant === 'plain' 
        ? 'text-gray-400 cursor-not-allowed' 
        : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' 
      : ''
    
    return [iconBase, iconVariants[props.variant], disabledClass].filter(Boolean).join(' ')
  }
  
  // Text button styling
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900',
    dark: 'bg-gray-900 hover:bg-black text-white',
    plain: 'text-gray-900 hover:bg-gray-100',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  }
  
  const disabledClass = props.disabled || props.loading 
    ? 'opacity-50 cursor-not-allowed'
    : ''
  
  const widthClass = props.fullWidth ? 'w-full' : ''
  
  return [baseStyles, variants[props.variant], sizes[props.size], disabledClass, widthClass]
    .filter(Boolean)
    .join(' ')
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
.text-button {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}</style>