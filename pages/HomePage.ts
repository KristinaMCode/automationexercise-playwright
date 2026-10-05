import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly testCaseButton: Locator;
    readonly apiListButton: Locator;
    readonly shopMenu: Locator;
    readonly productsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.testCaseButton = page.getByRole('button', { name: 'Test Cases' });
        this.apiListButton = page.getByRole('button', { name: 'APIs list for practice' });
        this.shopMenu = page.locator('.shop-menu.pull-right');
        this.productsLink = page.getByRole('link', { name: 'Products' });
    }

    async goto() {
        await this.page.goto('/');
    }
}