import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly path = '/';
    readonly testCaseButton: Locator;
    readonly apiListButton: Locator;
  

    constructor(page: Page) {
        super(page);
        this.testCaseButton = page.getByRole('button', { name: 'Test Cases' });
        this.apiListButton = page.getByRole('button', { name: 'APIs list for practice' });
     
    }

}