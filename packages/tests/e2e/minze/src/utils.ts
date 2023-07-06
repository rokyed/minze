import type { Page } from '@playwright/test'

/**
 * Navigates to http://localhost:5173/e2e/minze/
 */
export async function start(page: Page) {
  await page.goto('e2e/minze/')
}

/**
 * Appends provided template into the #app element.
 *
 * @example
 * ```
 * appendToApp(`<div>test</div>`)
 */
export function appendToApp(template: string) {
  const app = document.querySelector<HTMLDivElement>('#app') ?? null
  if (app) app.innerHTML += template
}
