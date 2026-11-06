import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { test } from '../support/fixtures/page-fixture';
import { pageHeaders } from '../support/test-data';

test.describe('Combine API and UI tests', () => {
  test('should perform an API request and then a UI check', async ({ request, page, apiNetworkPage }) => {
    let username: string = faker.internet.username();
    let email: string = faker.internet.email();
    let userId: string;

    await test.step('Generate user data', async () => {
      const response = await apiNetworkPage.postUserData(username, email);

      expect(response.status()).toBe(201);
      const userData = await response.json();
      userId = userData.id;
      expect(userData.name).toBe(username);
      expect(userData.email).toBe(email);
    });

    await test.step('Perform UI check on api page and verify that the user is listed', async () => {
      const userDataResponse = await apiNetworkPage.getUserData();
      const userData = await userDataResponse.json();
      expect(userData.map((user: any) => user.id)).toContain(userId);
      await apiNetworkPage.navigateToApiNetworkPage(26);
      await expect(apiNetworkPage.apiPageHeader).toHaveText(pageHeaders.apiNetworkPageHeader);

      await expect(apiNetworkPage.userList).toBeVisible();
      await expect(apiNetworkPage.userList).toContainText(username);
      await expect(apiNetworkPage.userList).toContainText(email);
    });
  });
});