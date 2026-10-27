import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ECommercePage } from '../pages/e-commerce-page';

export const test = base.extend<{
  loginPage: LoginPage;
  eCommercePage: ECommercePage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  eCommercePage: async ({ page }, use) => {
    await use(new ECommercePage(page));
  },
});