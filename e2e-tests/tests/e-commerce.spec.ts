import { expect } from '@playwright/test';
import { test } from '../support/fixtures/page-fixture';
import { faker } from '@faker-js/faker';
import { allProductCategories, userCredentials, expectedProducts, pageHeaders, productQuality, registrationMessages, orderSummary } from '../support/test-data';

test.describe('Filter dropdown test', () => {
    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(6);
        await expect(eCommercePage.filterPageHeader).toContainText(pageHeaders.filterPageHeader);
    });
    test('User is able to filter products with all categories filter', async ({ eCommercePage }) => {
        await test.step('Select the "All" category filter', async () => {
            await eCommercePage.selectCategory('All');
        });

        await test.step('Verify all products and categories are displayed', async () => {
            const productCards = eCommercePage.productCards;
            await expect(productCards).toHaveCount(allProductCategories.length);
            await expect(eCommercePage.productCategoryUnderCard).toHaveText(allProductCategories);
        });
    });

    const productsByCategory = Map.groupBy(expectedProducts, (product) => product.category);

    for (const [category, products] of productsByCategory) {
        test(`User is able to filter products with a category ${category}`, async ({ eCommercePage }) => {
            await test.step(`Select the "${category}" category filter`, async () => {
                await eCommercePage.selectCategory(category);
            });

            await test.step('Verify filtered products match expected category, name, and price', async () => {
                await expect(eCommercePage.productCards).toHaveCount(products.length);
                await expect(eCommercePage.productCategoryUnderCard).toHaveText(products.map(() => category));
                await expect(eCommercePage.productNameUnderCard).toHaveText(products.map((product) => product.name));
                await expect(eCommercePage.productPriceUnderCard).toHaveText(
                    products.map((product) => `$${product.price}`),
                );
            });
        });
    }
});

test.describe('Sorting test', () => {
    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(7);
        await expect(eCommercePage.filterPageHeader).toContainText(pageHeaders.sortPageHeader);
    });

    test('User is able to sort product by ascending price', async ({ eCommercePage }) => {
        await test.step('Sort products by ascending price', async () => {
            await eCommercePage.sortByPrice('asc');
        });

        await test.step('Verify products are sorted in ascending price order', async () => {
            const productPrices = await eCommercePage.productPriceUnderCard.allTextContents();
            const numPrices = productPrices.map((price) => parseFloat(price.replace('$', '')));
            const sortedProductPrices = [...numPrices].sort((a, b) => a - b);
            expect(numPrices).toEqual(sortedProductPrices);
        });
    });

    test('User is able to sort product by descending price', async ({ eCommercePage }) => {
        await test.step('Sort products by descending price', async () => {
            await eCommercePage.sortByPrice('desc');
        });

        await test.step('Verify products are sorted in descending price order', async () => {
            const productPrices = await eCommercePage.productPriceUnderCard.allTextContents();
            const numPrices = productPrices.map((price) => parseFloat(price.replace('$', '')));
            const sortedProductPrices = [...numPrices].sort((a, b) => b - a);
            expect(numPrices).toEqual(sortedProductPrices);
        });
    });
});

test.describe('Adding products to cart', () => {
    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(8);
        await expect(eCommercePage.filterPageHeader).toContainText(pageHeaders.cartPageHeader);
        await expect(eCommercePage.cartItems).toHaveText('Cart: 0 items');
    });

    test('User is able to add a product to the cart', async ({ eCommercePage }) => {
        await test.step('Add the first product to the cart', async () => {
            await eCommercePage.playwrightAddToCartButton.click();
        });

        await test.step('Verify the product is added to the cart', async () => {
            await expect(eCommercePage.cartItems).toHaveText('Cart: 1 items');
        });
    });

    test('User is able to add multiple products to the cart', async ({ eCommercePage }) => {
        await test.step('Add the first product to the cart', async () => {
            await eCommercePage.playwrightAddToCartButton.click();
            await eCommercePage.automationCourseAddToCartButton.click();
        });

        await test.step('Verify the products are added to the cart', async () => {
            await expect(eCommercePage.cartItems).toHaveText('Cart: 2 items');
        });
    });
});

test.describe('Update cart test', () => {
    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(9);
        await expect(eCommercePage.filterPageHeader).toContainText(pageHeaders.productQuantityPageHeader);
    });

    test('User is able to update the quantity and price of a product in the cart', async ({ eCommercePage }) => {

        await test.step('Verify the initial quantity is set', async () => {
            await expect(eCommercePage.quantityInput).toHaveValue(productQuality.defaultQuantity.toString());
            await expect(eCommercePage.totalPrice).toHaveText(productQuality.defaultPrice); 
        });

        await test.step('Update the quantity of the product in the cart', async () => {
            const quantity = productQuality.randomQuantity;
            await eCommercePage.quantityInput.fill(quantity); 
        });

        await test.step('Verify the price is updated in the cart', async () => {
            const updatedPrice = (Number(productQuality.defaultPrice.replace('$', '')) * Number(productQuality.randomQuantity)).toFixed(2);
            await expect(eCommercePage.totalPrice).toHaveText(`$${updatedPrice}`);
        });
    });
});
test.describe('Remove product from cart', () => {
    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(10);
        await expect(eCommercePage.filterPageHeader).toContainText(pageHeaders.removeProductPageHeader);
        await expect(eCommercePage.cartItemsInRemoveTab).toHaveCount(2);
    });

    test('User is able to remove both products from the cart', async ({ eCommercePage }) => {
            await eCommercePage.removeFromCartButton.first().click();
            await expect(eCommercePage.cartItemsInRemoveTab).toHaveCount(1);
            await eCommercePage.removeFromCartButton.click();
            await expect(eCommercePage.cartItemsInRemoveTab).toHaveCount(0);
    });
});

test.describe('Checkout process test', () => {
    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(11);
        await expect(eCommercePage.filterPageHeader).toContainText(pageHeaders.checkoutPageHeader);
        await expect(eCommercePage.checkoutForm).toBeVisible();
    });

    test('User is able to complete the checkout process', async ({ eCommercePage }) => {
            await eCommercePage.fullNameInput.fill(userCredentials.fullName);
            await eCommercePage.shippingAddressInput.fill(userCredentials.shippingAddress);
            await eCommercePage.cityInput.fill(userCredentials.city);
            await eCommercePage.zipCodeInput.fill(userCredentials.zipCode);
            await eCommercePage.creditCardNumberInput.fill(userCredentials.creditCardNumber);
            await eCommercePage.placeOrderButton.click();
            await expect(eCommercePage.orderConfirmationMessage).toContainText(registrationMessages.orderSuccess);
    });
});

test.describe('Order confirmation page', () => {
    test.beforeEach(async ({ eCommercePage }) => {
        await eCommercePage.goToEcommercePage(12);
        await expect(eCommercePage.filterPageHeader).toContainText(pageHeaders.orderSummaryPageHeader);
    });

    test('User is able to validate the order confirmation message', async ({ eCommercePage }) => {
        
        await test.step('Validate tax summary', async () => {
        const subtotal = await eCommercePage.subTotalSummary.textContent();
        const tax = await eCommercePage.taxSummary.textContent();
        const total = await eCommercePage.totalSummary.textContent();

        const subtotalValue = Number(subtotal?.replace('$', ''));
        const taxValue = Number(tax?.replace('$', ''));
        const totalValue = Number(total?.replace('$', ''));

        await expect(taxValue).toBeCloseTo(subtotalValue * orderSummary.taxRate, 2);
        await expect(totalValue).toBeCloseTo(subtotalValue + taxValue, 2);
        });
    });
}); 

    