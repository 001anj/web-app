import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginPageHeader: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly usernameInput: Locator;
  readonly loggedInCard: Locator;
  readonly logoutButton: Locator;
  readonly errorMessage: Locator;

  // registration locators
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly countrySelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly termsCheckbox: Locator;
  readonly registerButton: Locator;
  readonly registrationSuccessMessage: Locator;

  // dynamic elements locators
  readonly dynamicButton: Locator; 
  readonly dynamicMessage: Locator;

  // search feature locators
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchCard: Locator;
  readonly noResultsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPageHeader = this.page.locator('h2');
    this.usernameInput = this.page.getByTestId('username-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.loginButton = this.page.getByTestId('login-button');
    this.loggedInCard = this.page.getByTestId('logged-in-message');
    this.logoutButton = this.page.getByTestId('logout-button');

    // error message locator
    this.errorMessage = this.page.getByTestId('login-error');
    this.firstNameInput = this.page.getByTestId('first-name-input');
    this.lastNameInput = this.page.getByTestId('last-name-input');
    this.countrySelect = this.page.getByTestId('country-select');
    this.newsletterCheckbox = this.page.getByTestId('newsletter-checkbox');
    this.termsCheckbox = this.page.getByTestId('terms-checkbox');
    this.registerButton = this.page.getByTestId('register-button');
    this.registrationSuccessMessage = this.page.getByTestId('registration-success');
    this.dynamicButton = this.page.getByTestId('dynamic-button');
    this.dynamicMessage = this.page.getByTestId('dynamic-message');
    this.searchInput = this.page.getByTestId('search-input');
    this.searchButton = this.page.getByTestId('search-btn');
    this.searchCard = this.page.getByTestId('search-results');
    this.noResultsMessage = this.page.getByTestId('no-results');
  }
  
  async goToPage(pageNumber: number) {
    await this.page.goto(`/ui-interactions/exercise-${pageNumber}`);
  }

  loginError(error: string) {
    return this.errorMessage.getByText(error);
  }
}