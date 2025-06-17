import { chromium, test as it, expect } from '@playwright/test';

it.beforeAll('', () => {
    console.log('Before all tests');

});
it.describe.skip('Form Page', () => {
    it.beforeEach(() => {
        console.log('Before each test');
    });
    it.afterEach(() => {
        console.log('After each test');
    })
    it.afterAll(() => {
        console.log('After all tests');
    })
    it('test1', () => {
        console.log('Test1');
    })
    it('test2', () => {
        console.log('Test2');
    })
})

it.describe('Form Page Type', () => {
    it('Fill all fields', async ({ page }) => {
        // const browser = await chromium.launch({ headless: false });
        // const context = await browser.newContext();         
        // const page = await context.newPage();
        await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")
        await page.pause()
        await page.locator('[id="name"]').fill("Hope")
        await page.locator("[class='w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5'][type=\"email\"]")
            .pressSequentially("Hope@mail.com", { delay: 100 });
        await page.locator('input[placeholder="Password"]').fill("test1245")
        await page.locator('[for="companyname"]~[placeholder="Company"]').fill("AdventureInc")
        await page.locator('label:has-text("Website")~ input#websitename').fill("AdventureTime")
        await page.selectOption('select[name="country"]', { label: 'United States' })
        await page.locator('label:has-text("City")~input#inputCity').fill("Chicago")
        await page.getByPlaceholder('Address 1').fill("Happiness Avenue")
        await page.getByPlaceholder('Address 2').fill("Dream Street")
        await page.getByRole('textbox', { name: "Zip Code" }).fill("12345")
        await page.getByRole('textbox', { name: "State" }).fill("Illinois")
        await page.getByRole('button', { name: "Submit" }).click()
        await expect(page.locator('h2:has-text("input form validation")')).toBeVisible()
        await page.pause()
    })
}) 