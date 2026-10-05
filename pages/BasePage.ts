import { Page, Locator } from '@playwright/test';
export abstract class BasePage {
    readonly page: Page;
    readonly shopMenu: Locator;
    readonly productsLink: Locator;
    abstract readonly path: string;


    constructor(page: Page) {
        this.page = page;
        this.shopMenu = page.locator('.shop-menu.pull-right');
        this.productsLink = page.getByRole('link', { name: 'Products' })
    }

    async goto() {
        await this.page.goto(this.path);
    }
}