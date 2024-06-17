import { expect, type Locator, type Page } from '@playwright/test';

export class SwagLabsProductsPage{
    readonly page:Page;
    readonly ProductsTitle:Locator;

    constructor(page:Page) {
        this.page=page;
        this.ProductsTitle=page.locator('//span[text()="Products"]');
    }

    protected getLocatorByText(text : string) {
        return this.page.locator(`//div[text()="${text}"]`);
    }

    async verifyTitle() {
        expect(this.ProductsTitle).toBeVisible();
    }

    async chooseLabel() {
        const dropdown = this.page.locator('//select[@class="product_sort_container"]'); // Оновлено локатор для select
        await dropdown.waitFor(); // Очікуємо, поки випадаючий список стане доступним
        await dropdown.selectOption({ value: 'lohi' }); // Значення має відповідати value опції
    }

    async verifyElementByText(text : string) {
        expect(this.getLocatorByText(text)).toBeVisible();
    }

    async verifyElementByTextArray(array : Array<string>){
        for(let i =0 ; i < array.length;i=i+1){
            this.verifyElementByText(array[i]);
        }
    }
}