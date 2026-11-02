import { Locator, Page } from '@playwright/test';

export class ShoppingPage {
    readonly page: Page;
    readonly registerForm: Locator;
    readonly proceedToCheckoutButton: Locator;
    readonly cartTab: Locator;
    readonly cartItemName: Locator;
    readonly cartItemPrice: Locator;
    readonly cartTotal: Locator;
    readonly usernameInput: Locator;
    readonly registerButton: Locator;
    readonly registerSuccessMessage: Locator;
    readonly passwordInput: Locator;
    readonly orderConfirmationMessage: Locator;
    readonly addToCartButton: Locator;
    readonly shopFormHeader: Locator;
    readonly shopForm: Locator;
    readonly loginForm: Locator;
    readonly loginUsernameInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;
    readonly shoppingPageHeader: Locator;
    readonly addressInput: Locator;
    readonly creditCardInput: Locator;
    readonly submitCheckoutButton: Locator;
    readonly summaryTab: Locator;
    readonly orderConfirmationHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoppingPageHeader = page.locator('.card h2');
        
        // registration form
        this.registerForm = page.locator('#e2e-register-form');
        this.usernameInput = page.getByTestId('reg-username');
        this.passwordInput = page.getByTestId('reg-password');
        this.registerButton = page.getByTestId('reg-submit');
        this.registerSuccessMessage = page.getByTestId('reg-success-msg');

        // login form
        this.loginForm = page.locator('#e2e-login-form');
        this.loginUsernameInput = page.getByTestId('login-username');
        this.loginPasswordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-submit');

        // shop form
        this.shopForm = page.locator('#e2e-shop');
        this.shopFormHeader = page.locator('#e2e-shop > p');
        this.addToCartButton = page.getByTestId('e2e-add-1');

        // cart tab
        this.cartTab = page.locator('#e2e-cart');
        this.cartItemName = page.getByTestId('cart-item-name');
        this.cartItemPrice = page.getByTestId('cart-item-price');
        this.cartTotal = page.getByTestId('cart-total');
        this.proceedToCheckoutButton = page.getByTestId('checkout-btn');

        // checkout tab
        this.addressInput = page.getByTestId('checkout-address');
        this.creditCardInput = page.getByTestId('checkout-card');
        this.submitCheckoutButton = page.getByTestId('checkout-submit');

        // summary tab
        this.summaryTab = page.locator('#e2e-summary');
        this.orderConfirmationHeader = page.locator('#e2e-summary h3');
        this.orderConfirmationMessage = page.getByTestId('e2e-success-message');
    }

    async register(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.registerButton.click();
    }

    async login(username: string, password: string) {
        await this.loginUsernameInput.fill(username);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    async goToShoppingPage() {
        await this.page.goto('/e2e-flow/exercise-30');
    }

    stepIcon(stepName: string): Locator {
        return this.page.getByTestId(`step-icon-${stepName}`);
    }
}