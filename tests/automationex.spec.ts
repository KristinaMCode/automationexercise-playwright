import { test, expect } from '@playwright/test';
import { PATH } from '../test-data/testData';
import { HomePage } from '../pages/HomePage';

test('Verify first page', async ({ page }) => {
    await page.route(/(googlesyndication|doubleclick|googleadservices)/, route => route.abort());
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle('Automation Exercise');
    await expect(homePage.testCaseButton).toBeVisible();
    await expect(homePage.apiListButton).toBeVisible();
    await expect(homePage.shopMenu).toBeVisible();
    await expect(homePage.productsLink).toBeVisible();
});

test('verify All products page', async ({ page }) => {
    await page.route(/(googlesyndication|doubleclick|googleadservices)/, route => route.abort());
    await page.goto('/');
    await page.getByRole('link', { name: 'Products' }).click();
    await expect(page).toHaveURL(PATH.products);
    await expect(page.locator('.title.text-center')).toHaveText('All Products');
    await page.locator('#search_product').fill('Tshirt');
    await page.locator('#submit_search').click();
    await expect(page.locator('.title.text-center')).toHaveText('Searched Products');
});
