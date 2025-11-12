import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ProInput from '../components/ProInput/ProInput.vue'

/**
 * ProInput Component
 *
 * A flexible input component supporting various types and validation states.
 * Built with Tailwind CSS and supports all standard HTML input types.
 *
 * ## Features
 * - Multiple input types (text, email, password, number, date, etc.)
 * - Label support
 * - Placeholder text
 * - Disabled and readonly states
 * - Validation feedback
 * - Accessible with proper ARIA labels
 *
 * ## Usage Example
 * ```vue
 * <ProInput
 *   label="Email Address"
 *   type="email"
 *   placeholder="your@email.com"
 *   v-model="email"
 * />
 * ```
 */
const meta = {
  title: 'Components/ProInput',
  component: ProInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible input component supporting various types and validation states.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'date', 'search'],
      description: 'Input type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    label: {
      control: 'text',
      description: 'Input label',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Make input read-only',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      control: 'boolean',
      description: 'Mark as required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof ProInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    disabled: false,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    type: 'text',
    placeholder: 'John Doe',
    disabled: false,
  },
}

export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'your@email.com',
    disabled: false,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    disabled: false,
  },
}

export const Number: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '25',
    disabled: false,
  },
}

export const Date: Story = {
  args: {
    label: 'Birth Date',
    type: 'date',
    disabled: false,
  },
}

export const Search: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search...',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    type: 'text',
    placeholder: 'This input is disabled',
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'Read-only Input',
    type: 'text',
    placeholder: 'This input is read-only',
    readonly: true,
  },
}

export const Required: Story = {
  args: {
    label: 'Required Field',
    type: 'text',
    placeholder: 'This field is required',
    required: true,
  },
}