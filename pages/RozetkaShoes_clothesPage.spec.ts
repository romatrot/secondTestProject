import { expect, type Locator, type Page } from '@playwright/test';

export class RozetkaShoes_clothesPage{  
    readonly page: Page;
    readonly ManButton:Locator;
    readonly shoes_clothesButton:Locator;
    readonly backpackButton:Locator;
    readonly adidascheckbox:Locator;
    readonly adidasbutton:Locator;

    constructor(page:Page){
        this.page=page;
        this.ManButton=page.locator('a[class="portal-cats__link"][href="/ua/mujskaja-odejda-obuv-i-aksessuary/c2337942/"]');
        this.shoes_clothesButton=page.locator('a[class="portal-cats__link portal-cats__link_size_small"][href="/ua/sumki/c4630220/52257=117392/"]');
        this.backpackButton=page.locator('//span[text()=" Рюкзаки "]');
        this.adidascheckbox=page.locator('[class="checkbox-filter__link"][data-id="Adidas"]');
        this.adidasbutton=page.locator('//button[text()=" Adidas "]');
    }

    async clickManButton(){
        await this.ManButton.click();
    }

    async clickshoes_clothesButton(){
        await this.shoes_clothesButton.click();
    }

    async waitForMansBacksAndAksesuarsLabel(){
        await expect(this.page.locator('//h1[text()="Сумки та аксесуари, Категорія Для чоловіків"]')).toBeVisible();
    }

    async verifyURL(){
        expect(this.page.url()).toBe('https://rozetka.com.ua/ua/sumki/c4630220/52257=117392/');
    }

    async clickbackpackButton(){
        await this.backpackButton.click();
    }
    
    async clickadidascheckbox(){
        await this.adidascheckbox.click();
    }
}