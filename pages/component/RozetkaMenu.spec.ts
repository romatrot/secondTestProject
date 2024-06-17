import { expect, type Locator, type Page } from '@playwright/test';

export class RozetkaMenu{
    readonly page: Page;
    readonly cityButton: Locator;
    readonly cityPrilutsk:Locator;

    constructor(page:Page){
        this.page=page;
        this.cityButton=page.locator('//span[@class="city-toggle__text"]');
        this.cityPrilutsk=page.locator('//span[text()=" Прилуцьке - Волинська обл. "]');
    }

    async clickCityButton(){
        await this.cityButton.click();
    }

    async expectCityPrilutsk(){
        await expect(this.cityPrilutsk).toBeVisible();
    }
}