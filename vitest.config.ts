import { defineConfig } from 'vitest/config'
import { defineVitestConfig, defineVitestProject } from '@nuxt/test-utils/config'

const browserConfig = {
  browser: {
    enabled: true,
    provider: 'playwright',
    instances: [{ browser: 'chromium' }],
  },
  environment: 'nuxt',
  include: ['tests/browser/**/*.spec.ts'],
  setupFiles: ['vitest-browser-vue'],
}

const defaultConfig = {
  environment: 'nuxt',
  exclude: ['tests/browser/**/*.spec.ts', 'node_modules/**', 'dist/**', '.data/**'],
}

export default defineConfig({
  test: {
    projects: [
      await defineVitestProject({
        test: browserConfig,
      }),
    ],
  }
})
