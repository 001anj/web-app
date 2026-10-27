import { expect } from '@playwright/test';
import { test } from '../support/fixtures/page-fixture';
import { allProductCategories, expectedProducts, pageHeaders } from '../support/test-data';

test.describe('Filter dropdown test', () => {

    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(6);
        await expect(eCommercePage.filterPageHeader).toContainText(pageHeaders.ecommercePageHeader);
    });
    test('User is able to filter products with all categories filter', async ({ eCommercePage }) => {
        await eCommercePage.selectCategory('All');
        const productCards = eCommercePage.productCards;
        await expect(productCards).toHaveCount(allProductCategories.length);
        await expect(eCommercePage.productCategoryUnderCard).toHaveText(allProductCategories);
    });

    const productsByCategory = Map.groupBy(expectedProducts, (product) => product.category);

    for (const [category, products] of productsByCategory) {
        test(`User is able to filter products with a category ${category}`, async ({ eCommercePage }) => {
            await eCommercePage.selectCategory(category);

            await expect(eCommercePage.productCards).toHaveCount(products.length);
            await expect(eCommercePage.productCategoryUnderCard).toHaveText(products.map(() => category));
            await expect(eCommercePage.productNameUnderCard).toHaveText(products.map((product) => product.name));
            await expect(eCommercePage.productPriceUnderCard).toHaveText(
                products.map((product) => `$${product.price}`),
            );
        });
    }
});