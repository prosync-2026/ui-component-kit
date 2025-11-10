# Vue Component Library - Quick Start

## What You Have

A production-ready Vue 3 component library with:
- ✅ TypeScript support
- ✅ Tailwind CSS integration
- ✅ PrimeVue 3 compatibility
- ✅ Tree-shakeable exports
- ✅ Full type definitions

## Components Included

1. **Button** - Customizable button with variants and loading states
2. **Card** - Container component with header/footer slots
3. **Input** - Text input with label, error, and hint support
4. **Select** - Dropdown wrapper around PrimeVue Dropdown

## Setup Steps

### 1. Build the Library

```bash
cd vue-component-library
npm install
npm run build
```

### 2. Install in Your Projects

Choose one method:

**Option A: Local Development**
```bash
npm install file:../path/to/vue-component-library
```

**Option B: From Git Repository**
```bash
npm install git+https://github.com/your-org/vue-component-library.git
```

**Option C: Private NPM**
```bash
# After setting up private registry
npm publish
npm install @your-org/vue-component-library
```

### 3. Configure Your Project

**Install peer dependencies:**
```bash
npm install vue@^3.4.0 primevue@^3.50.0 primeicons
npm install -D tailwindcss postcss autoprefixer
```

**Setup Tailwind** (`tailwind.config.js`):
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

**Setup main.ts:**
```typescript
import { createApp } from 'vue'
import App from './App.vue'

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

// Component Library
import ComponentLibrary from '@your-org/vue-component-library'
import '@your-org/vue-component-library/style.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(ComponentLibrary)
app.mount('#app')
```

### 4. Use Components

```vue
<script setup lang="ts">
import { Button, Card, Input, Select } from '@your-org/vue-component-library'
import { ref } from 'vue'

const email = ref('')
const country = ref('')
const countries = [
  { label: 'USA', value: 'us' },
  { label: 'UK', value: 'uk' },
  { label: 'Canada', value: 'ca' },
]
</script>

<template>
  <Card title="Sign Up">
    <Input
      v-model="email"
      label="Email"
      type="email"
      placeholder="you@example.com"
    />
    
    <Select
      v-model="country"
      :options="countries"
      label="Country"
      placeholder="Select your country"
    />
    
    <Button variant="primary" full-width>
      Register
    </Button>
  </Card>
</template>
```

## File Structure

```
vue-component-library/
├── src/
│   ├── components/      # Your components
│   ├── styles/          # Global styles
│   └── index.ts         # Main entry point
├── dist/                # Built files (after npm run build)
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Customization

### Add New Components

1. Create component in `src/components/YourComponent/`
2. Export from `src/components/YourComponent/index.ts`
3. Add to `src/index.ts`
4. Run `npm run build`

### Customize Theme

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-darker-color',
      },
    },
  },
}
```

## Next Steps

1. **Update package.json** - Change `@your-org/vue-component-library` to your organization name
2. **Add more components** - Follow the pattern in existing components
3. **Set up versioning** - Use semantic versioning (major.minor.patch)
4. **Create documentation** - Document each component's props and events
5. **Set up CI/CD** - Automate building and publishing

## Documentation Files

- `README.md` - General overview and features
- `USAGE_GUIDE.md` - Detailed usage examples
- `PROJECT_STRUCTURE.md` - Architecture and maintenance guide
- `QUICK_START.md` - This file!

## Troubleshooting

**Styles not working?**
- Import the CSS: `import '@your-org/vue-component-library/style.css'`
- Check Tailwind config includes library path

**PrimeVue components not styled?**
- Import PrimeVue theme CSS
- Import PrimeIcons CSS

**TypeScript errors?**
- Ensure `vue` and `primevue` are installed
- Check TypeScript version (5.3.0+)

## Support

For issues or questions:
1. Check documentation files
2. Review example components
3. Test in a fresh project

Happy coding! 🚀
