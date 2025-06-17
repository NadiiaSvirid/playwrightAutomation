import { test as it, expect } from '@playwright/test';

// it.describe('Login Test', () => {
//     it.beforeEach(async ({page}) => {
//         await page.goto('https://demoqa.com/books');
//     });
//     it('Verify authentication and log out', async ({page, browserName}) => {
//         const logOutButton = page.locator('#submit');
//         await expect(logOutButton).toHaveText('Log out');
//         await page.screenshot({ path: `screenshot/${browserName}-profile.png` });
//     });
// });

it.describe('Login Test with Auth', () => {
    it.beforeEach(async ({ page }) => {
        await page.goto('https://coding.pasv.us/profile');
    });
    it('Verify authentication and log out', async ({ page, browserName }) => {
        await expect(page.locator('img[alt="PASV educational platform"]')).toBeVisible();
        await page.screenshot({ path: `screenshot/${browserName}-profile.png` });
    });
});
