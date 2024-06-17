import { expect, type Locator, type Page } from '@playwright/test';

export class TheInternetHerokuappPage{
    readonly page:Page;

    constructor (page:Page) {
        this.page=page; 
    }

    protected getLocatorByText(text:string) {
        return this.page.locator(`//a[text()="${text}"]`);
    }
    
    async goTo() {
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async clickButtonText(text:string){
        await this.getLocatorByText(text).click();
    }
}