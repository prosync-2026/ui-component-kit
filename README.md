# Prosync UI Component Kit

A reusable Vue 3 component library built with PrimeVue 3, Tailwind CSS, and TypeScript.

## UI Documentation & Playground
https://prosync-ui-component-kit-docs.vercel.app/

## Features

- 🎨 Built with Tailwind CSS for easy customization
- 🚀 TypeScript support with full type definitions
- 📦 Tree-shakeable - import only what you need
- 🎯 PrimeVue 3 integration ready
- 💪 Fully typed props and events

## Installation

### Step 1: Build the Library

```bash
cd ui-component-kit
npm install
npm run build
```

### Step 2: Install in Your Project

You have several options:

#### Option A: Local Installation (Development)

```bash
npm install file:../path/to/ui-component-kit
```

#### Option B: Git Repository (Installation to Project)

```bash
npm install git+https://github.com/prosync-2026/ui-component.git
```

## Usage in Your Projects

### 1. Install Dependencies

Make sure your project has the peer dependencies:

```bash
npm install vue@^3.4.0 primevue@^3.50.0
```

### 2. Setup Tailwind CSS

If you haven't already, set up Tailwind in your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // Add this line to include library components
    "./node_modules/@prosync/ui-component-kit/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Import Components

#### Global Registration (main.ts)

```typescript
import { createApp } from 'vue'
import App from './App.vue'

// Import PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

// Import your component library
import ProsyncUIComponents from '@prosync/ui-component-kit'
import '@prosync/ui-component-kit/style.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(ProsyncUIComponents)

app.mount('#app')
```

#### Individual Component Import

```vue
<script setup lang="ts">
import { ProButton, ProCard, ProInput } from '@prosync/ui-component-kit'
import '@prosync/ui-component-kit/style.css'
</script>

<template>
  <ProCard title="Login Form">
    <ProInput
      v-model="email"
      label="Email"
      type="email"
      placeholder="Enter your email"
    />
    
    <ProInput
      v-model="password"
      label="Password"
      type="password"
      placeholder="Enter your password"
    />
    
    <ProButton variant="primary" @click="handleLogin">
      Login
    </ProButton>
  </ProCard>
</template>
```

## Available Components

### ProButton

```vue
<ProButton
  variant="primary"
  size="md"
  :loading="false"
  :disabled="false"
  @click="handleClick"
>
  Click Me
</ProButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- `fullWidth`: boolean

### ProCard

```vue
<ProCard
  title="Card Title"
  :elevated="true"
  :bordered="false"
  :hoverable="false"
>
  <template #header>
    Custom Header
  </template>
  
  Card Content
  
  <template #footer>
    Card Footer
  </template>
</ProCard>
```

**Props:**
- `title`: string
- `elevated`: boolean
- `bordered`: boolean
- `hoverable`: boolean

### ProInput

```vue
<ProInput
  v-model="value"
  label="Label"
  placeholder="Placeholder"
  type="text"
  :required="false"
  :disabled="false"
  error="Error message"
  hint="Helper text"
  size="md"
/>
```

**Props:**
- `modelValue`: string | number
- `label`: string
- `placeholder`: string
- `type`: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
- `disabled`: boolean
- `required`: boolean
- `error`: string
- `hint`: string
- `size`: 'sm' | 'md' | 'lg'

### ProSelect

```vue
<ProSelect
  v-model="selectedValue"
  :options="options"
  label="Select Label"
  placeholder="Choose an option"
  option-label="label"
  option-value="value"
  :filter="true"
  :show-clear="true"
/>
```

**Props:**
- `modelValue`: any
- `options`: any[]
- `label`: string
- `placeholder`: string
- `optionLabel`: string (default: 'label')
- `optionValue`: string (default: 'value')
- `disabled`: boolean
- `required`: boolean
- `error`: string
- `hint`: string
- `filter`: boolean
- `showClear`: boolean

## Customization

### Extending Tailwind Theme

You can customize the color scheme by modifying `tailwind.config.js` in the library:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
}
```

### Adding New Components

1. Create a new component in `src/components/YourComponent/`
2. Export it from `src/components/YourComponent/index.ts`
3. Add it to `src/index.ts`
4. Rebuild the library

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev

# To view Storybook
npm run storybook
```
