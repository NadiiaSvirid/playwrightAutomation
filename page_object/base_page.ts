import {test as base, expect as baseExpect} from '@playwright/test';
import {DatePicker} from '../page_object/DatePicker';

export const test = base.extend<{
    datePicker: DatePicker
}>({
    datePicker: async ({page}, use) => {
        await use(new DatePicker(page));
    }
})

export const expect = baseExpect;