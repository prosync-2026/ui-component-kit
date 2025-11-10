<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || title" class="px-6 py-4 border-b border-gray-200">
      <slot name="header">
        <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
      </slot>
    </div>
    
    <div class="px-6 py-4">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-gray-200 bg-gray-50">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface CardProps {
  title?: string
  elevated?: boolean
  bordered?: boolean
  hoverable?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  title: '',
  elevated: true,
  bordered: false,
  hoverable: false,
})

const cardClasses = computed(() => {
  const base = 'bg-white rounded-lg overflow-hidden'
  const elevation = props.elevated ? 'shadow-md' : ''
  const border = props.bordered ? 'border border-gray-200' : ''
  const hover = props.hoverable ? 'transition-shadow hover:shadow-lg' : ''
  
  return [base, elevation, border, hover].filter(Boolean).join(' ')
})
</script>
