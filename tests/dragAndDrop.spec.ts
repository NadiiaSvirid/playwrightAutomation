import {test as it, expect} from '@playwright/test';
import { DragAndDrop } from '../page_object/DragAndDrop';

it.describe('Drag and Drop Tests', () => {
    it('Navigate to Drag and Drop', async ({ page }) => {
        const dragAndDrop = new DragAndDrop(page);
        const url = 'https://www.lambdatest.com/selenium-playground/drag-and-drop-demo'
        await page.goto(url);
        await dragAndDrop.dragAndDropElement('Draggable 1');
        await dragAndDrop.dragAndDropElement('Draggable 2');

        //Perform drag and drop using option2
        await page.reload()
        await dragAndDrop.dragAndDropElementOption2('Draggable 1');
        await dragAndDrop.dragAndDropElementOption2('Draggable 2');
    });
})