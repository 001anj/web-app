import { Locator, Page } from '@playwright/test';

export class ECommercePage {
  readonly page: Page;
  readonly categoryFilterdropdown: Locator;
  readonly productCards: Locator;
  readonly filterPageHeader: Locator;
  readonly productCategoryUnderCard: Locator;
  readonly productNameUnderCard: Locator;
  readonly productPriceUnderCard: Locator;
  readonly sortDropdown: Locator;
  readonly productCardInSortingList: Locator;
  readonly productPriceInSortingList: Locator;
  readonly orderConfirmationMessage: Locator;
  readonly playwrightAddToCartButton: Locator;
  readonly automationCourseAddToCartButton: Locator;
  readonly cartItems: Locator;
  readonly quantityInput: Locator;
  readonly totalPrice: Locator;
  readonly removeFromCartButton: Locator;
  readonly cartItemsInRemoveTab: Locator;
  readonly fullNameInput: Locator;
  readonly shippingAddressInput: Locator;
  readonly cityInput: Locator;
  readonly zipCodeInput: Locator;
  readonly creditCardNumberInput: Locator;
  readonly placeOrderButton: Locator;
  readonly checkoutForm: Locator;
  readonly subTotalSummary: Locator;
  readonly taxSummary: Locator;
  readonly totalSummary: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // filter product page
    this.filterPageHeader = page.locator('.card h2');
    this.categoryFilterdropdown = page.getByTestId('category-filter');
    this.productCards = page.getByTestId('product-card');
    this.productCategoryUnderCard = this.productCards.getByTestId('product-category');
    this.productNameUnderCard = this.productCards.locator('h3');
    this.productPriceUnderCard = this.productCards.getByTestId('product-price');

    // Sorting
    this.sortDropdown = page.getByTestId('sort-select');
    this.productCardInSortingList = page.getByTestId('product-card');
    this.productPriceInSortingList = this.productCardInSortingList.getByTestId('product-price');

    // Adding products to cart
    this.playwrightAddToCartButton = page.getByTestId('add-to-cart-1');
    this.automationCourseAddToCartButton = page.getByTestId('add-to-cart-2');
    this.cartItems = page.getByTestId('cart-badge');

    // Updating cart
    this.quantityInput = page.getByTestId('quantity-input');
    this.totalPrice = page.getByTestId('total-price'); 

    // Remove product tab
    this.removeFromCartButton = page.getByTestId(/remove-btn-.*/);
    this.cartItemsInRemoveTab = page.locator('.cart-item');

    // Checkout process tab
    this.fullNameInput = page.getByTestId('full-name-input');
    this.shippingAddressInput = page.getByTestId('shipping-address-input');
    this.creditCardNumberInput = page.getByTestId('credit-card-number-input');
    this.cityInput = page.getByTestId('city-input');
    this.zipCodeInput = page.getByTestId('zip-code-input');
    this.placeOrderButton = page.getByTestId('place-order-button');
    this.checkoutForm = page.locator('#checkout-form');
    this.orderConfirmationMessage = page.locator('#order-success');

    // Order validation tab
    this.subTotalSummary = page.locator('#summary-subtotal');
    this.taxSummary = page.locator('#summary-tax'); 
    this.totalSummary = page.locator('#summary-total');

  }

  async goToEcommercePage(pageNumber: number) {
    await this.page.goto(`/ecommerce/exercise-${pageNumber}`);
  }

  async selectCategory(category: string) {
    await this.categoryFilterdropdown.selectOption(category);
  }

  async sortByPrice(sort: string) {
    await this.sortDropdown.selectOption(sort);
  }
}
