import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineConfig({
  test: { 
    projects: [
      await defineVitestProject({
        test: {
          environment: 'node',
          browser: {
            enabled: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium',
            }],
          },
        },
      }),
    ],
  }
})
