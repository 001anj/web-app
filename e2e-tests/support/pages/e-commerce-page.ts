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