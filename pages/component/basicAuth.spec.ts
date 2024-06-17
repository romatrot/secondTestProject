import { Page, Route } from '@playwright/test';

export async function basicAuth(page: Page, username: string, password: string): Promise<void> {
  await page.route('**/*', (route: Route) => {
    const headers = {
      ...route.request().headers(),
      'Authorization': `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
    };
    route.continue({ headers });
  });
}
