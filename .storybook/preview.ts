import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import '../src/styles/main.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'

// Setup PrimeVue in Storybook
setup((app) => {
  app.use(PrimeVue, {
    unstyled: false,
    ripple: true,
  })
})

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    docs: {
      toc: true,
    },
  },
};

export default preview;