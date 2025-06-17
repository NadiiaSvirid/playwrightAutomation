import { expect, Page } from '@playwright/test';
import { DemoQARegisterPage } from './DemoQARegisterPage';

export class RegisterForm extends DemoQARegisterPage {
    constructor(page: Page) {
        super(page);
    }
}