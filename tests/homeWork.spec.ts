import { test, expect } from '@playwright/test';

test.describe.skip('HOME WORK', () => {
    test('Form1', async ({ page }) => {
        await page.goto("https://testpages.eviltester.com/styled/basic-html-form-test.html");
        await page.locator('input[name="username"]').fill("Hope")
        await page.locator('input[type="password"]').fill("test1245")
        await page.locator('textarea[name="comments"]').fill("I am a test comment")
        await page.setInputFiles('input[name="filename"]', 'pasv.png');
        await page.locator('input[type="checkbox"][value="cb1"]').check();
        await page.locator('input[type="checkbox"][value="cb2"]').check();
        await page.locator('input[type="checkbox"][value="cb2"]').check();
        await page.selectOption('select[name="multipleselect[]"]', { label: 'Selection Item 3' })
        await page.selectOption('select[name="dropdown"]', { label: 'Drop Down Item 4' })
        await page.getByRole('button', { name: "Submit" }).click()
        await expect(page.locator('p:has-text("You submitted a form. The details below show the values you entered for processing. ")')).toBeVisible()
        // await page.pause()
    });
})

test.describe('HOME WORK 2', () => {
    test('Form2', async ({ page }) => {
        // await page.pause()
        await page.goto("https://demoqa.com/automation-practice-form#google_vignette");
        await page.locator('#firstName').fill("Hope")
        await page.locator('input[placeholder="Last Name"]').fill("Miller")
        await page.locator('#userEmail').pressSequentially("Home@Home.net", { delay: 100 });
        // await page.locator('input[name="gender"][value="Female"]').check(); ? 
        await page.locator('#genterWrapper label[for="gender-radio-2"]').click();
        await page.locator('#userNumber-wrapper input[placeholder="Mobile Number"]').pressSequentially("1234567890");
        await page.locator('#dateOfBirth-wrapper input').click();
        await page.locator('.react-datepicker__month-select').selectOption({ label: 'September' });
        await page.locator('.react-datepicker__year-select').selectOption({ label: '1990' });
        await page.locator('.react-datepicker__day--015').click();
        await page.locator('#subjectsInput').fill("PASV");
        await page.locator('label[for="hobbies-checkbox-2"]').click();
        await page.setInputFiles('#uploadPicture', 'pasv.png');
        await page.locator('#currentAddress').fill("1234 Test St, Test City, TC 12345");
        await page.locator('#state').click();
        await page.locator('div[id^="react-select"][class*="option"]', { hasText: 'Uttar Pradesh' }).click();
        await page.locator('#city').click();
        await page.locator('div[id^="react-select"][class*="option"]', { hasText: 'Lucknow' }).click();
        await page.getByRole('button', { name: "Submit" }).click()
        await expect(page.locator('#example-modal-sizes-title-lg:has-text("Thanks for submitting the form")')).toBeVisible()
    })
})