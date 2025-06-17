import { test as it, expect } from '../page_object/base_page';
import { DatePicker } from '../page_object/DatePicker';

it.describe('Date Picker Tests with fixture', () => {
    it('Navigate to Date Picker using fixture', async ({datePicker, page}) => {
        await datePicker.navigateToDatePicker();
        await datePicker.verifyHeader();
        await datePicker.dateFromToday();
        console.log(page.url());
        await expect(page).toHaveURL(/jquery-date-picker-demo/);
    });
});