import { test, expect } from '@playwright/test';
import { PATH, PRODUCT, TEXT } from '../test-data/testData';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test.beforeEach(async ({ page }) => {
    await page.route(/(googlesyndication|doubleclick|googleadservices)/, route => route.abort());
});

test('Verify first page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle(TEXT.automationExercise);
    await expect(homePage.testCaseButton).toBeVisible();
    await expect(homePage.apiListButton).toBeVisible();
    await expect(homePage.shopMenu).toBeVisible();
    await expect(homePage.productsLink).toBeVisible();
});

test('verify All products page', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    await homePage.goto();
    await homePage.productsLink.click();
    await expect(page).toHaveURL(PATH.products);
    await expect(productsPage.productPageTitle).toHaveText(TEXT.allProducts);
    await productsPage.searchProduct(PRODUCT.tShirt);
    await expect(productsPage.productPageTitle).toHaveText(TEXT.searchedProducts);
});
