import { expect, type Locator, type Page } from '@playwright/test';

export class ChooseCity{
    readonly page: Page;
    readonly cityTerminal:Locator;
    readonly cityPrulutskOnTerminal:Locator;
    readonly useButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.cityTerminal=page.locator('//input[@name="search"]');
        this.cityPrulutskOnTerminal=page.locator('//span[text()="с. Прилуцьке - Волинська обл."][@class="ng-star-inserted"]');
        this.useButton=page.locator('//button[text()=" Застосувати "]');
    }

    async fillCityTerminal(){
        await this.cityTerminal.clear();
        await this.cityTerminal.fill("Луцьк");
        await this.cityPrulutskOnTerminal.click();
    }

    async clickUseButton(){
        await this.useButton.click();
    }
}