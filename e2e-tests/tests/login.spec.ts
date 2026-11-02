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
    await test.step('Navigate to login page', async () => {
      await loginPage.goToPage(1);
      await expect(loginPage.loginPageHeader).toHaveText(pageHeaders.loginPageHeader);
    });

    await test.step('Log in with valid credentials', async () => {
      await loginPage.usernameInput.fill(getEnv('ADMIN_USERNAME'));
      await loginPage.passwordInput.fill(getEnv('ADMIN_PASSWORD'));
      await loginPage.loginButton.click();
      await expect(loginPage.loggedInCard).toBeVisible();
    });

    await test.step('Log out', async () => {
      await loginPage.logoutButton.click();
      await expect(loginPage.usernameInput).toBeVisible();
    });
  });
});

test.describe('Negative test cases for Login Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToPage(2);
  });

  test('User cannot log in with invalid credentials', async ({ loginPage }) => {
    await test.step('Submit invalid credentials', async () => {
      await loginPage.usernameInput.fill(invalidLoginCredentials.username);
      await loginPage.passwordInput.fill(invalidLoginCredentials.password);
      await loginPage.loginButton.click();
    });

    await test.step('Verify invalid credentials error is shown', async () => {
      await expect(loginPage.loginError(errorMessages.invalidCredentials)).toBeVisible();
    });
  });

  test('User cannot log in with empty credentials', async ({ loginPage }) => {
    await test.step('Submit empty credentials', async () => {
      await loginPage.usernameInput.fill('');
      await loginPage.passwordInput.fill('');
      await loginPage.loginButton.click();
    });

    await test.step('Verify empty credentials error is shown', async () => {
      await expect(loginPage.loginError(errorMessages.emptyCredentials)).toBeVisible();
    });
  });

  test('User cannot log in with only username', async ({ loginPage }) => {
    await test.step('Submit credentials with only username filled', async () => {
      await loginPage.usernameInput.fill(onlyUsernameCredentials.username);
      await loginPage.passwordInput.fill(onlyUsernameCredentials.password);
      await loginPage.loginButton.click();
    });

    await test.step('Verify empty credentials error is shown', async () => {
      await expect(loginPage.loginError(errorMessages.emptyCredentials)).toBeVisible();
    });
  });

  test('User cannot log in with only password', async ({ loginPage }) => {
    await test.step('Submit credentials with only password filled', async () => {
      await loginPage.usernameInput.fill(onlyPasswordCredentials.username);
      await loginPage.passwordInput.fill(onlyPasswordCredentials.password);
      await loginPage.loginButton.click();
    });

    await test.step('Verify empty credentials error is shown', async () => {
      await expect(loginPage.loginError(errorMessages.emptyCredentials)).toBeVisible();
    });
  });
});
test.describe('User is able to register successfully', () => {
  test('User can register with valid credentials', async ({ loginPage }) => {
    await test.step('Navigate to registration page', async () => {
      await loginPage.goToPage(3);
    });

    await test.step('Fill in and submit the registration form', async () => {
      await loginPage.firstNameInput.fill(userCredentials.firstName);
      await loginPage.lastNameInput.fill(userCredentials.lastName);
      await loginPage.countrySelect.selectOption(randomCountry);
      await loginPage.newsletterCheckbox.check();
      await loginPage.termsCheckbox.check();
      await loginPage.registerButton.click();
    });

    await test.step('Verify registration success message is displayed', async () => {
      await expect(loginPage.registrationSuccessMessage).toBeVisible();
      await expect(loginPage.registrationSuccessMessage).toContainText(registrationMessages.success);
      await expect(loginPage.registrationSuccessMessage).toContainText(registrationMessages.thankYouMessage);
    });
  });
});

test.describe('User is able to click on dynamic elements', () => {
  test('User can click on dynamic elements', async ({ loginPage }) => {
    await test.step('Navigate to dynamic elements page', async () => {
      await loginPage.goToPage(4);
    });

    await test.step('Click the dynamic button once visible', async () => {
      await loginPage.dynamicButton.visible().click();
    });

    await test.step('Verify dynamic button clicked message is displayed', async () => {
      await expect(loginPage.dynamicMessage).toContainText(dynamicButtonClickedMessage);
    });
  });
});

test.describe('User is able to use the search feature', () => {
  test('User can search for products', async ({ loginPage }) => {
    const productName = randomProduct.name;
    const productCategory = randomProduct.category;
    const productPrice = randomProduct.price.toString();

    await test.step('Navigate to search page', async () => {
      await loginPage.goToPage(5);
    });

    await test.step('Search for a product', async () => {
      await loginPage.searchInput.fill(productName);
      await loginPage.searchButton.click();
    });

    await test.step('Verify the correct product is displayed', async () => {
      await expect(loginPage.searchCard).toHaveCount(1);
      await expect(loginPage.searchCard).toContainText(productName);
      await expect(loginPage.searchCard).toContainText(productCategory);
      await expect(loginPage.searchCard).toContainText(productPrice);
    });
  });
});