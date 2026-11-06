import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ECommercePage } from '../pages/e-commerce-page';
import { ShoppingPage } from '../pages/shopping-page';
import { ApiNetworkPage } from '../pages/api-network.page';

export const test = base.extend<{
  loginPage: LoginPage;
  eCommercePage: ECommercePage;
  shoppingPage: ShoppingPage;
  apiNetworkPage: ApiNetworkPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  eCommercePage: async ({ page }, use) => {
    await use(new ECommercePage(page));
  },
  shoppingPage: async ({ page }, use) => {
    await use(new ShoppingPage(page));
  },
  apiNetworkPage: async ({ page }, use) => {
    await use(new ApiNetworkPage(page));
  },
});