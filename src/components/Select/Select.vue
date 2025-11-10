<template>
  <div class="flex flex-col gap-2">
    <label
      v-if="label"
      :for="selectId"
      class="text-sm font-medium text-gray-700"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <PrimeDropdown
      :id="selectId"
      v-model="selectedValue"
      :options="options"
      :option-label="optionLabel"
      :option-value="optionValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :filter="filter"
      :show-clear="showClear"
      :class="dropdownClasses"
      @change="handleChange"
    />
    
    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
    <p v-else-if="hint" class="text-sm text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PrimeDropdown from 'primevue/dropdown'

export interface SelectProps {
  modelValue?: any
  options: any[]
  label?: string
  placeholder?: string
  optionLabel?: string
  optionValue?: string
  disabled?: boolean
  required?: boolean
  error?: string
  hint?: string
  filter?: boolean
  showClear?: boolean
}

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Select an option',
  optionLabel: 'label',
  optionValue: 'value',
  disabled: false,
  required: false,
  filter: false,
  showClear: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: any]
  change: [event: any]
}>()

const selectId = ref(`select-${Math.random().toString(36).substr(2, 9)}`)

const selectedValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const dropdownClasses = computed(() => {
  const base = 'w-full'
  const errorClass = props.error ? 'p-invalid' : ''
  
  return [base, errorClass].filter(Boolean).join(' ')
})

const handleChange = (event: any) => {
  emit('change', event)
}
</script>

<style>
/* You can add custom PrimeVue overrides here if needed */
.p-dropdown {
  @apply rounded-lg border-gray-300;
}

.p-dropdown:not(.p-disabled):hover {
  @apply border-primary-500;
}

.p-dropdown:not(.p-disabled).p-focus {
  @apply border-primary-500 ring-2 ring-primary-500 ring-offset-0;
}

.p-dropdown.p-invalid {
  @apply border-red-500;
}
</style>
