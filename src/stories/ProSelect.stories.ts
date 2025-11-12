import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ProSelect from '../components/ProSelect/ProSelect.vue'

/**
 * ProSelect Component
 *
 * A dropdown select component for choosing from predefined options.
 * Built with Tailwind CSS and supports single and multiple selections.
 *
 * ## Features
 * - Single and multiple selection modes
 * - Customizable options
 * - Searchable options
 * - Label support
 * - Disabled state
 * - Default values
 * - Accessible with proper ARIA labels
 *
 * ## Usage Example
 * ```vue
 * <ProSelect
 *   label="Select an option"
 *   :options="['Option 1', 'Option 2', 'Option 3']"
 *   v-model="selectedValue"
 * />
 * ```
 */
const meta = {
  title: 'Components/ProSelect',
  component: ProSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible select/dropdown component supporting single and multiple selections.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Select label',
      table: {
        type: { summary: 'string' },
      },
    },
    options: {
      control: 'object',
      description: 'Array of options to select from',
      table: {
        type: { summary: 'array' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selections',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof ProSelect>

export default meta
type Story = StoryObj<typeof meta>

const defaultOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

export const Default: Story = {
  args: {
    placeholder: 'Choose an option...',
    options: defaultOptions,
    multiple: false,
    disabled: false,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Select Option',
    placeholder: 'Choose an option...',
    options: defaultOptions,
    multiple: false,
    disabled: false,
  },
}

export const Multiple: Story = {
  args: {
    label: 'Select Multiple',
    placeholder: 'Choose options...',
    options: defaultOptions,
    multiple: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    placeholder: 'Choose an option...',
    options: defaultOptions,
    multiple: false,
    disabled: true,
  },
}

export const ManyOptions: Story = {
  args: {
    label: 'Countries',
    placeholder: 'Select a country...',
    options: [
      'United States',
      'Canada',
      'Mexico',
      'United Kingdom',
      'France',
      'Germany',
      'Italy',
      'Spain',
      'Japan',
      'China',
      'India',
      'Brazil',
      'Australia',
    ],
    multiple: false,
    disabled: false,
  },
}

export const CustomOptions: Story = {
  args: {
    label: 'Priority Level',
    placeholder: 'Select priority...',
    options: ['Low', 'Medium', 'High', 'Critical'],
    multiple: false,
    disabled: false,
  },
}