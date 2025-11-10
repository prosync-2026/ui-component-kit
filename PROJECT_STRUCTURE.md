# Project Structure

```
prosync/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.vue
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.vue
│   │   │   └── index.ts
│   │   └── Input/
│   │       ├── Input.vue
│   │       └── index.ts
│   ├── styles/
│   │   └── main.css
│   └── index.ts
├── dist/                   # Generated after build
│   ├── index.mjs           # ES Module
│   ├── index.cjs           # CommonJS
│   ├── index.d.ts          # TypeScript definitions
│   └── style.css           # Compiled styles
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── USAGE_GUIDE.md
└── setup.sh
```

## Adding New Components

### 1. Create Component Structure

```bash
mkdir -p src/components/NewComponent
touch src/components/NewComponent/NewComponent.vue
touch src/components/NewComponent/index.ts
```

### 2. Create the Component

**src/components/NewComponent/NewComponent.vue**

```vue
<template>
  <div :class="componentClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface NewComponentProps {
  variant?: 'default' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<NewComponentProps>(), {
  variant: 'default',
  size: 'md',
})

const componentClasses = computed(() => {
  // Your class logic
  return 'base-class'
})
</script>
```

### 3. Export Component

**src/components/NewComponent/index.ts**

```typescript
import NewComponent from './NewComponent.vue'

export { NewComponent }
export type { NewComponentProps } from './NewComponent.vue'
```

### 4. Add to Main Index

**src/index.ts**

```typescript
import { NewComponent } from './components/NewComponent'

export { NewComponent }
export type { NewComponentProps } from './components/NewComponent'

// In the plugin install function:
export default {
  install(app: App) {
    app.component('AppNewComponent', NewComponent)
  },
}
```

### 5. Rebuild

```bash
npm run build
```

## Component Design Guidelines

### 1. Props

- Use TypeScript interfaces for props
- Provide sensible defaults with `withDefaults()`
- Keep prop names consistent across components
- Use union types for variant/size options

### 2. Styling

- Use Tailwind utility classes
- Create computed classes for dynamic styling
- Support customization through props
- Maintain consistent spacing/sizing scales

### 3. Slots

- Provide named slots for flexible content
- Use default slot for primary content
- Document all available slots

### 4. Events

- Use typed emits with `defineEmits`
- Follow Vue naming conventions (kebab-case)
- Emit the original event object when relevant

### 5. Accessibility

- Include proper ARIA attributes
- Support keyboard navigation
- Ensure sufficient color contrast
- Provide labels for form elements

## Publishing Strategies

### Option 1: Private NPM Registry

1. Set up private registry (Verdaccio, npm Enterprise, etc.)
2. Configure `.npmrc`:
```
@qubit:registry=https://registry.your-company.com
```
3. Publish:
```bash
npm publish
```

### Option 2: GitHub Packages

1. Update package.json:
```json
{
  "name": "@ryedonna/prosync",
  "repository": {
    "type": "git",
    "url": "https://github.com/ryedonna/prosync.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

2. Create `.npmrc` in your project:
```
@ryedonna:registry=https://npm.pkg.github.com
```

3. Authenticate and publish:
```bash
npm login --registry=https://npm.pkg.github.com
npm publish
```

### Option 3: Local Development

Use npm/yarn link:

```bash
# In library directory
npm link

# In consuming project
npm link @qubit/prosync
```

Or use file path:
```bash
npm install file:../path/to/prosync
```

### Option 4: Git Repository

Install directly from Git:
```bash
npm install git+ssh://git@github.com:qubit/prosync.git
npm install git+https://github.com/qubit/prosync.git
npm install git+https://github.com/qubit/prosync.git#v1.0.0
```

## Version Management

Follow semantic versioning (semver):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backwards compatible
- **PATCH** (0.0.1): Bug fixes, backwards compatible

```bash
# Bump version
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0

# Push tags
git push --follow-tags
```

## Maintenance Best Practices

1. **Keep dependencies updated**
```bash
npm outdated
npm update
```

2. **Test in consuming projects**
- Create a test project
- Test all components
- Verify styling works correctly

3. **Document breaking changes**
- Maintain a CHANGELOG.md
- List breaking changes in release notes

4. **Provide migration guides**
- Help users upgrade between major versions
- Include code examples

5. **Monitor bundle size**
```bash
npm install -D vite-plugin-visualizer
```

Add to vite.config.ts:
```typescript
import { visualizer } from 'vite-plugin-visualizer'

export default defineConfig({
  plugins: [
    vue(),
    dts(),
    visualizer(),
  ],
})
```
