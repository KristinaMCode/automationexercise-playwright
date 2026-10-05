import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { PATH } from '../test-data/testData';

export class ProductsPage extends BasePage {
    readonly path = PATH.products;
    readonly productPageTitle: Locator;
    readonly productInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        super(page);
        this.productPageTitle = page.locator('.title.text-center');
        this.productInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
    }

    async searchProduct(product: string) {
        await this.productInput.fill(product);
        await this.searchButton.click();
    }
}