import { Page, Locator, expect } from '@playwright/test';

export class DragAndDrop {
    private readonly page: Page;
    private readonly dragEl: Locator;
    private readonly dropZone: Locator;
    private readonly dropList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dragEl = this.page.locator('[draggable="true"]');
        this.dropZone = this.page.locator('[id="mydropzone"]');
        this.dropList = this.page.locator('#droppedlist');
    }
    /**
     * 
     * @param text - text content of the element to be dragged and dropped
     */
    public async dragAndDropElement(text: string) {
        const dragSource = this.dragEl.filter({ hasText: text });
        await dragSource.dragTo(this.dropZone);
        await this.verifyDrop(text);
    }
    /**
    * 
    * @param text - text content of the element to be dragged and dropped
    */
    public async dragAndDropElementOption2(text: string) {
        const dragSource = this.dragEl.filter({ hasText: text });
        await dragSource.hover();
        await this.page.mouse.down();
        await this.dropZone.hover();
        await this.page.mouse.up();
        await this.verifyDrop(text);
    }
    /**
     * 
     * @param text - text content of the element to veify in the drop list
    */

    public async verifyDrop(text: string) {
        const droListText = await this.dropList.textContent();
        expect(droListText).toContain(text)

    }
}