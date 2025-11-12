import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ProButton from '../components/ProButton/ProButton.vue'

/**
 * ProButton Component
 *
 * A versatile button component matching the Figma design specification.
 * Supports multiple variants, sizes, and states with optional icon support.
 *
 * ## Features
 * - Multiple variant options (primary, secondary, dark, plain)
 * - Size variations (sm, md, lg)
 * - Icon-only button variant (32x32 square)
 * - Disabled and hover states
 * - Accessible and semantic
 * - Left and right icon slots
 *
 * ## Variants
 * - **Primary**: Blue background (#51A2FF) - main action button
 * - **Secondary**: Gray background - less prominent actions
 * - **Dark**: Dark background (#1D293D) - alternative primary style
 * - **Plain**: No background - subtle text-only button
 *
 * ## Usage Examples
 * ```vue
 * <!-- Text button with icons -->
 * <ProButton variant="primary" size="md">
 *   <template #iconLeft>←</template>
 *   Click me
 *   <template #iconRight>→</template>
 * </ProButton>
 *
 * <!-- Icon only button -->
 * <ProButton variant="primary" size="md" iconOnly>
 *   ←
 * </ProButton>
 * ```
 */
const meta = {
  title: 'Components/ProButton',
  component: ProButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible button component with variants, sizes, and icon support matching Figma design specifications.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'dark', 'plain'],
      description: 'Button style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only button (32x32)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof ProButton>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Primary button - main action button with blue background
 */
export const Primary: Story = {
  render: () => ({
    components: { ProButton },
    template: `<ProButton variant="primary">Click me</ProButton>`,
  }),
}

/**
 * Primary button with left and right icons
 */
export const PrimaryWithIcons: Story = {
  render: () => ({
    components: { ProButton },
    template: `
      <ProButton variant="primary">
        <template #iconLeft>←</template>
        Button
        <template #iconRight>→</template>
      </ProButton>
    `,
  }),
}

/**
 * Primary button hover state
 */
export const PrimaryHover: Story = {
  render: () => ({
    components: { ProButton },
    template: `<ProButton variant="primary" class="hover:bg-blue-700">Hover State</ProButton>`,
  }),
}

/**
 * Primary button disabled state
 */
export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">Disabled</ProButton>`,
  }),
}

/**
 * Secondary button - less prominent action
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `
      <ProButton v-bind="args">
        <template #iconLeft>←</template>
        Button
        <template #iconRight>→</template>
      </ProButton>
    `,
  }),
}

/**
 * Dark button - alternative primary style
 */
export const Dark: Story = {
  args: {
    variant: 'dark',
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `
      <ProButton v-bind="args">
        <template #iconLeft>←</template>
        Button
        <template #iconRight>→</template>
      </ProButton>
    `,
  }),
}

/**
 * Plain button - text-only subtle button
 */
export const Plain: Story = {
  args: {
    variant: 'plain',
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">Button</ProButton>`,
  }),
}

/**
 * Icon-only primary button (32x32 square)
 */
export const IconOnlyPrimary: Story = {
  args: {
    variant: 'primary',
    iconOnly: true,
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">←</ProButton>`,
  }),
}

/**
 * Icon-only secondary button
 */
export const IconOnlySecondary: Story = {
  args: {
    variant: 'secondary',
    iconOnly: true,
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">←</ProButton>`,
  }),
}

/**
 * Icon-only dark button
 */
export const IconOnlyDark: Story = {
  args: {
    variant: 'dark',
    iconOnly: true,
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">←</ProButton>`,
  }),
}

/**
 * Icon-only plain button
 */
export const IconOnlyPlain: Story = {
  args: {
    variant: 'plain',
    iconOnly: true,
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">←</ProButton>`,
  }),
}

/**
 * Small button size
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">Small</ProButton>`,
  }),
}

/**
 * Medium button size (default)
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">Medium</ProButton>`,
  }),
}

/**
 * Large button size
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
  },
  render: (args) => ({
    components: { ProButton },
    setup() {
      return { args }
    },
    template: `<ProButton v-bind="args">Large</ProButton>`,
  }),
}

/**
 * All variants comparison
 */
export const AllVariants: Story = {
  render: () => ({
    components: { ProButton },
    template: `
      <div class="flex gap-3 flex-wrap">
        <ProButton variant="primary">Primary</ProButton>
        <ProButton variant="secondary">Secondary</ProButton>
        <ProButton variant="dark">Dark</ProButton>
        <ProButton variant="plain">Plain</ProButton>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants side by side',
      },
    },
  },
}

/**
 * All sizes comparison
 */
export const AllSizes: Story = {
  render: () => ({
    components: { ProButton },
    template: `
      <div class="flex gap-3 flex-wrap items-center">
        <ProButton size="sm">Small</ProButton>
        <ProButton size="md">Medium</ProButton>
        <ProButton size="lg">Large</ProButton>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes',
      },
    },
  },
}

/**
 * All states comparison
 */
export const AllStates: Story = {
  render: () => ({
    components: { ProButton },
    template: `
      <div class="space-y-4">
        <div class="flex gap-3 flex-wrap">
          <ProButton variant="primary">Initial</ProButton>
          <ProButton variant="primary" :disabled="true">Disabled</ProButton>
          <ProButton variant="primary" :loading="true">Loading</ProButton>
        </div>
        <div class="flex gap-3 flex-wrap">
          <ProButton variant="secondary">Initial</ProButton>
          <ProButton variant="secondary" :disabled="true">Disabled</ProButton>
        </div>
        <div class="flex gap-3 flex-wrap">
          <ProButton variant="dark">Initial</ProButton>
          <ProButton variant="dark" :disabled="true">Disabled</ProButton>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button states: initial, disabled, and loading',
      },
    },
  },
}