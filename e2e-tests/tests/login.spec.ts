import { expect } from '@playwright/test';
import { test } from '../support/fixtures/page-fixture';
import {
  errorMessages,
  userCredentials,
  randomCountry,
  randomProduct,
  pageHeaders,
  invalidLoginCredentials,
  onlyUsernameCredentials,
  onlyPasswordCredentials,
  registrationMessages,
  dynamicButtonClickedMessage,
} from '../support/test-data';
import { getEnv } from '../support/helper';

test.describe('Positive test cases forLogin Tests', () => {
  test('User can log in and log out successfully', async ({ loginPage }) => {
    await loginPage.goToPage(1);
    await expect(loginPage.loginPageHeader).toHaveText(pageHeaders.loginPageHeader);
    await loginPage.usernameInput.fill(getEnv('ADMIN_USERNAME'));
    await loginPage.passwordInput.fill(getEnv('ADMIN_PASSWORD'));
    await loginPage.loginButton.click();
    await expect(loginPage.loggedInCard).toBeVisible();
    await loginPage.logoutButton.click();
    await expect(loginPage.usernameInput).toBeVisible();
  });
});

test.describe('Negative test cases for Login Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToPage(2);
  });

  test('User cannot log in with invalid credentials', async ({ loginPage }) => {
    await loginPage.usernameInput.fill(invalidLoginCredentials.username);
    await loginPage.passwordInput.fill(invalidLoginCredentials.password);
    await loginPage.loginButton.click();
    await expect(loginPage.loginError(errorMessages.invalidCredentials)).toBeVisible();
  });

  test('User cannot log in with empty credentials', async ({ loginPage }) => {
    await loginPage.usernameInput.fill('');
    await loginPage.passwordInput.fill('');
    await loginPage.loginButton.click();
    await expect(loginPage.loginError(errorMessages.emptyCredentials)).toBeVisible();
  });

  test('User cannot log in with only username', async ({ loginPage }) => {
    await loginPage.usernameInput.fill(onlyUsernameCredentials.username);
    await loginPage.passwordInput.fill(onlyUsernameCredentials.password);
    await loginPage.loginButton.click();
    await expect(loginPage.loginError(errorMessages.emptyCredentials)).toBeVisible();
  });

  test('User cannot log in with only password', async ({ loginPage }) => {
    await loginPage.usernameInput.fill(onlyPasswordCredentials.username);
    await loginPage.passwordInput.fill(onlyPasswordCredentials.password);
    await loginPage.loginButton.click();
    await expect(loginPage.loginError(errorMessages.emptyCredentials)).toBeVisible();
  });
});
test.describe('User is able to register successfully', () => {
  test('User can register with valid credentials', async ({ loginPage }) => {
    await loginPage.goToPage(3);
    await loginPage.firstNameInput.fill(userCredentials.firstName);
    await loginPage.lastNameInput.fill(userCredentials.lastName);
    await loginPage.countrySelect.selectOption(randomCountry);
    await loginPage.newsletterCheckbox.check();
    await loginPage.termsCheckbox.check();
    await loginPage.registerButton.click();
    await expect(loginPage.registrationSuccessMessage).toBeVisible();
    await expect(loginPage.registrationSuccessMessage).toContainText(registrationMessages.success);
    await expect(loginPage.registrationSuccessMessage).toContainText(registrationMessages.thankYouMessage);
  });
});

test.describe('User is able to click on dynamic elements', () => {
  test('User can click on dynamic elements', async ({ loginPage }) => {
    await loginPage.goToPage(4);
    await loginPage.dynamicButton.visible().click();
    await expect(loginPage.dynamicMessage).toContainText(dynamicButtonClickedMessage);

  });
});

test.describe('User is able to use the search feature', () => {
  test('User can search for products', async ({ loginPage }) => {
    await loginPage.goToPage(5);
    const productName = randomProduct.name;
    const productCategory = randomProduct.category;
    const productPrice = randomProduct.price.toString();
    await loginPage.searchInput.fill(productName);
    await loginPage.searchButton.click();
    await expect(loginPage.searchCard).toHaveCount(1);
    await expect(loginPage.searchCard).toContainText(productName);
    await expect(loginPage.searchCard).toContainText(productCategory);
    await expect(loginPage.searchCard).toContainText(productPrice);
  });
});