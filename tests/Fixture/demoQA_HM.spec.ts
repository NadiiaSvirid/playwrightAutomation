import {test as it, expect} from './demoQA_HW';

it('User lands on profile after login', async ({demoQA_login}) => {
    await expect(demoQA_login).toHaveURL(/.*\/profile$/);
    await expect(demoQA_login.locator('#userName-value')).toContainText('Nadi!aPASV');
})