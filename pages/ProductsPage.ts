import { Page, Locator } from '@playwright/test';
export class ProductsPage {
    readonly page: Page;
    readonly productPageTitle: Locator;
    readonly productInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productPageTitle = page.locator('.title.text-center');
        this.productInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
    }

    async searchProduct(product: string) {
        await this.productInput.fill(product);
        await this.searchButton.click();
    }
}