import { expect, test } from 'vitest'
import { render } from 'vitest-browser-vue'
import App from './app.vue'

test('renders name', async () => {
  const { getByText } = render(App)
  // await expect.element(getByText('Hello World!')).toBeInTheDocument()
})
