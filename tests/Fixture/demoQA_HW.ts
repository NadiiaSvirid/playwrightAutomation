import { test as base, chromium, Page } from '@playwright/test';

type Fixtures = {
    demoQA_login: Page;
}

export const test = base.extend<Fixtures>({
    demoQA_login: async ({}, use) => {

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://demoqa.com/login');
        await page.locator('#userName').fill('Nadi!aPASV');
        await page.getByRole('textbox', { name: 'Password' }).fill('Nadi!a_PASV7');
        await page.getByRole('button', { name: 'Login', exact:true }).click();

        await page.waitForURL('**/profile');
        await use(page);

        await browser.close();
    }
});


export { expect } from '@playwright/test';