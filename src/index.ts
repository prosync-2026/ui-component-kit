import type { App, Plugin } from 'vue'

// Import styles
import './styles/main.css'

// Import components
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { Select } from './components/Select'

// Export individual components
export { Button, Card, Input, Select }

// Export types
export type { ButtonProps } from './components/Button'
export type { CardProps } from './components/Card'
export type { InputProps } from './components/Input'
export type { SelectProps } from './components/Select'

// Create plugin for global registration
export const VueComponentLibrary: Plugin = {
  install(app: App) {
    app.component('AppButton', Button)
    app.component('AppCard', Card)
    app.component('AppInput', Input)
    app.component('AppSelect', Select)
  },
}

// Also export as default for convenience
export default VueComponentLibrary