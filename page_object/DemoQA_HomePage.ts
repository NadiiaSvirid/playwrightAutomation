import { Page } from '@playwright/test';


export class DemoQAHomePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;

    }
    async gotoWeb(path: string) {
        await this.page.goto('https://demoqa.com/automation-practice-form#google_vignette');
        console.log(`Navigated to: ${this.page.url()}`);
    }
}