import { test as setup, expect } from '@playwright/test';

const authFile: string = './.auth/user.json';

// setup('authentication', async ({ page }) => {
//     // Navigate to the login page
//     await page.goto('https://demoqa.com/login');
//     await page.getByPlaceholder('UserName').fill('Nadi!aPASV');
//     await page.getByRole('textbox', { name: 'Password' }).fill('Nadi!a_PASV7');
//     await page.locator('#login').click();
//     // Verify successful logged in  
//     await page.waitForURL('https://demoqa.com/profile');
//     await expect(page.locator('[id = userName-value]')).toHaveText('Nadi!aPASV');
//     //Save all steps to storageState
//     await page.context().storageState({ path: authFile });
// });


setup('PASV HOMEWORK', async ({ page }) => {
    await page.goto('https://coding.pasv.us/user/login');
    await page.locator('#normal_login_email').fill('sviridnadiia777@gmail.com');
    await page.locator('#normal_login_password').fill('Rokokok777');
    await page.locator('button[type="submit"]').click();
    await page.waitForURL('https://coding.pasv.us/profile/6844dd188c0f605d0a2710f0');
    await expect(page.getByRole('heading', { level: 1, name: 'NADIIA SVIRID' })).toBeVisible();
    await page.context().storageState({ path: authFile });
})