import {test as it, expect} from '@playwright/test';
import { DatePicker } from '../page_object/DatePicker';
import { Page } from '@playwright/test'; 


it.describe('Date Picker Tests FROM', () => {
    it('Navigate to Date Picker', async ({ page }) => {
        const datePicker = new DatePicker(page);
        await datePicker.navigateToDatePicker();
        await datePicker.verifyHeader();
        await datePicker.dateFromToday();
        console.log(page.url());
        await expect(page).toHaveURL(/jquery-date-picker-demo/);
    });
});

