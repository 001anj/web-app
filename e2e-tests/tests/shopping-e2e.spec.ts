import { expect } from '@playwright/test';
import { test } from '../support/fixtures/page-fixture';
import { pageHeaders, userCredentials, registrationMessages } from '../support/test-data';


test.describe('Shopping end-to-end tests', () => {

    test.beforeEach(async ({ shoppingPage }) => {
        await shoppingPage.goToShoppingPage();
        await expect(shoppingPage.shoppingPageHeader).toHaveText(pageHeaders.shoppingPageHeader);
    });
    test('User is able to do shopping successfully', async ({ shoppingPage }) => {

         let username = userCredentials.firstName;
         let password = userCredentials.lastName;
         let successColor = ['background-color', 'rgb(16, 185, 129)'];

        await test.step('Register a new user', async () => {
            await expect(shoppingPage.registerForm).toBeVisible();
            await shoppingPage.register(username, password);
            await expect(shoppingPage.registerSuccessMessage).toHaveText(registrationMessages.registrationConfirmation);
            await expect(shoppingPage.stepIcon('register')).toHaveCSS(successColor[0], successColor[1]);
        })

        await test.step('Login with the registered user', async () => {
            await expect(shoppingPage.loginForm).toBeVisible();
            await shoppingPage.login(username, password);
            await expect(shoppingPage.stepIcon('login')).toHaveCSS(successColor[0], successColor[1]);
        });

        await test.step('Add items to the cart', async () => {
            await expect(shoppingPage.shopForm).toBeVisible();
            await expect(shoppingPage.shopFormHeader).toContainText(username);
            await shoppingPage.addToCartButton.click();
            await expect(shoppingPage.stepIcon('shop')).toHaveCSS(successColor[0], successColor[1]);
        });

        await test.step('Proceed to checkout', async () => {
            await expect(shoppingPage.cartTab).toBeVisible();
            await expect(shoppingPage.cartItemName).toHaveText('Playwright Mastery Course');
            await expect(shoppingPage.cartItemPrice).toHaveText('$199.99');
            await expect(shoppingPage.cartTotal).toHaveText('$199.99');
            await shoppingPage.proceedToCheckoutButton.click();
            await expect(shoppingPage.stepIcon('cart')).toHaveCSS(successColor[0], successColor[1]);
        });

        await test.step('Checkout with shipping and payment details', async () => {
            await shoppingPage.addressInput.fill(userCredentials.shippingAddress);
            await shoppingPage.creditCardInput.fill(userCredentials.creditCardNumber);
            await shoppingPage.submitCheckoutButton.click();
            await expect(shoppingPage.stepIcon('checkout')).toHaveCSS(successColor[0], successColor[1]);
        });

        await test.step('Verify checkout completion', async () => {
            await expect(shoppingPage.orderConfirmationHeader).toHaveText(pageHeaders.orderConfirmationPageHeader);
            await expect(shoppingPage.orderConfirmationMessage).toContainText(registrationMessages.orderConfirmation);
        });
    });
});