import type { App, Plugin } from 'vue'

// Import styles
import './styles/main.css'

// Import components
import { ProButton } from './components/ProButton'
import { ProCard } from './components/ProCard'
import { ProInput } from './components/ProInput'
import { ProSelect } from './components/ProSelect'

// Export individual components
export { ProButton, ProCard, ProInput, ProSelect }

// Export types
export type { ProButtonProps } from './components/ProButton'
export type { ProCardProps } from './components/ProCard'
export type { ProInputProps } from './components/ProInput'
export type { ProSelectProps } from './components/ProSelect'

// Create plugin for global registration
export const ProsyncUIComponents: Plugin = {
  install(app: App) {
    app.component('ProButton', ProButton)
    app.component('ProCard', ProCard)
    app.component('ProInput', ProInput)
    app.component('ProSelect', ProSelect)
  },
}

// Also export as default for convenience
export default ProsyncUIComponents