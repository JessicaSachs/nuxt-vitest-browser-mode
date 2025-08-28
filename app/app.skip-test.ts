import { test } from 'vitest'
import { render } from 'vitest-browser-vue'
import App from './app.vue'

// This test file fails because the NuxtRouteAnnouncer component depends on stuff
test('renders name', async () => {
  render(App)
})
