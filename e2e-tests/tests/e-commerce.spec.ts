import { expect } from '@playwright/test';
import { test } from '../support/fixtures/page-fixture';
import { allProductCategories, expectedProductsByCategory } from '../support/test-data';

test.describe('Filter dropdown test', () => {

    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(6);
        await expect(eCommercePage.filterPageHeader).toContainText('Exercise 6: Filter Products by Category');
    });
    test('User is able to filter products with all categories filter', async ({ eCommercePage }) => {
        await eCommercePage.selectCategory('All');
        const productCards = eCommercePage.productCards;
        await expect(productCards).toHaveCount(allProductCategories.length);
        await expect(eCommercePage.productCategoryUnderCard).toHaveText(allProductCategories);
    });

    for (const [category, products] of Object.entries(expectedProductsByCategory)) {
        test(`User is able to filter products with a category ${category}`, async ({ eCommercePage }) => {
            await eCommercePage.selectCategory(category);

            await expect(eCommercePage.productCards).toHaveCount(products.length);
            await expect(eCommercePage.productCategoryUnderCard).toHaveText(products.map(() => category));
            await expect(eCommercePage.productNameUnderCard).toHaveText(products);
        });
    }
});