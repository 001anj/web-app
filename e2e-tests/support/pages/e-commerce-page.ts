import { Locator, Page } from '@playwright/test';

export class ECommercePage {
  readonly page: Page;
  readonly categoryFilterdropdown: Locator;
  readonly productCards: Locator;
  readonly filterPageHeader: Locator;
  readonly productCategoryUnderCard: Locator;
  readonly productNameUnderCard: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // filter product page
    this.filterPageHeader = page.locator('.card h2');
    this.categoryFilterdropdown = page.getByTestId('category-filter');
    this.productCards = page.getByTestId('product-card');
    this.productCategoryUnderCard = this.productCards.locator('.product-category');
    this.productNameUnderCard = this.productCards.locator('h3');
  }

  async goToEcommercePage(pageNumber: number) {
    await this.page.goto(`/ecommerce/exercise-${pageNumber}`);
  }

  async selectCategory(category: string) {
    await this.categoryFilterdropdown.selectOption(category);
  }
}