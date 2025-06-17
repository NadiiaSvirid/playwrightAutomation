import {test as it, expect, FrameLocator} from '@playwright/test';

it.describe('Iframe', () => {
  it('iframe test', async ({ page }) => {
    const url = 'https://www.lambdatest.com/selenium-playground/nested-frames/';
    await page.goto(url);

    const frameBottom: FrameLocator = page.frameLocator('[name=\'frame-bottom\']')
     const leftFrame:string | null = await frameBottom.locator('#frame-left').textContent();
  });
})