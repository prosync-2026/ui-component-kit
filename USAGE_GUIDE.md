# How to Use This Library in Your Projects

## Quick Start Guide

### 1. Install the Library

```bash
# If using local development
npm install file:../path/to/vue-component-library

# Or from git
npm install git+https://github.com/your-org/vue-component-library.git

# Or from private npm
npm install @your-org/vue-component-library
```

### 2. Configure Your Project

#### Install Required Dependencies

```bash
npm install vue@^3.4.0 primevue@^3.50.0 primeicons
npm install -D tailwindcss postcss autoprefixer
```

#### Setup Tailwind CSS

1. Initialize Tailwind:
```bash
npx tailwindcss init -p
```

2. Update `tailwind.config.js`:
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@your-org/vue-component-library/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. Create `src/style.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Setup main.ts

```typescript
import { createApp } from 'vue'
import App from './App.vue'

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

// Your styles
import './style.css'

// Component Library
import ComponentLibrary from '@your-org/vue-component-library'
import '@your-org/vue-component-library/style.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(ComponentLibrary) // Global registration
app.mount('#app')
```

### 3. Use Components

#### Example 1: Login Form

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Card, Input } from '@your-org/vue-component-library'

const email = ref('')
const password = ref('')
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  // Your login logic
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <Card title="Login">
        <div class="space-y-4">
          <Input
            v-model="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            required
          />
          
          <Input
            v-model="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            required
          />
          
          <Button
            variant="primary"
            :loading="loading"
            full-width
            @click="handleLogin"
          >
            Sign In
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>
```

#### Example 2: Dashboard with Multiple Components

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button, Card } from '@your-org/vue-component-library'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
])
</script>

<template>
  <div class="p-6">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <Button variant="primary">Add User</Button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card title="Total Users" elevated hoverable>
        <p class="text-4xl font-bold text-primary-600">1,234</p>
      </Card>
      
      <Card title="Active" elevated hoverable>
        <p class="text-4xl font-bold text-green-600">892</p>
      </Card>
      
      <Card title="Pending" elevated hoverable>
        <p class="text-4xl font-bold text-yellow-600">342</p>
      </Card>
    </div>
    
    <Card title="Users List">
      <DataTable :value="users" striped-rows>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
      </DataTable>
    </Card>
  </div>
</template>
```

### 4. Using with Global Registration

If you used `app.use(ComponentLibrary)` in main.ts, you can use components without importing:

```vue
<template>
  <AppCard title="Global Component">
    <AppInput v-model="value" label="Name" />
    <AppButton @click="submit">Submit</AppButton>
  </AppCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const submit = () => {
  console.log(value.value)
}
</script>
```

## Customization in Your Project

### Override Tailwind Colors

In your project's `tailwind.config.js`:

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@your-org/vue-component-library/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Override the library's primary color
          500: '#your-color',
          600: '#your-darker-color',
          // ... etc
        },
      },
    },
  },
  plugins: [],
}
```

### Using PrimeVue Components with Your Library Components

```vue
<script setup lang="ts">
import { Card, Button } from '@your-org/vue-component-library'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import { ref } from 'vue'

const date = ref()
const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'London', code: 'LD' },
])
</script>

<template>
  <Card title="Book Appointment">
    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">Date</label>
        <Calendar v-model="date" class="w-full" />
      </div>
      
      <div>
        <label class="block text-sm font-medium mb-1">City</label>
        <Dropdown
          v-model="selectedCity"
          :options="cities"
          option-label="name"
          placeholder="Select a City"
          class="w-full"
        />
      </div>
      
      <Button variant="primary" full-width>
        Book Now
      </Button>
    </div>
  </Card>
</template>
```

## TypeScript Support

The library is fully typed. Your IDE will provide autocomplete and type checking:

```typescript
import type { ButtonProps, CardProps, InputProps } from '@your-org/vue-component-library'

// Use types in your own components
interface MyFormProps {
  buttonVariant?: ButtonProps['variant']
}
```

## Troubleshooting

### Styles not loading

Make sure you imported the CSS:
```typescript
import '@your-org/vue-component-library/style.css'
```

### PrimeIcons not showing

Install and import PrimeIcons:
```bash
npm install primeicons
```

```typescript
import 'primeicons/primeicons.css'
```

### Tailwind classes not working

Ensure your `tailwind.config.js` includes the library path in `content`:
```js
content: [
  "./node_modules/@your-org/vue-component-library/dist/**/*.{js,mjs}",
]
```
