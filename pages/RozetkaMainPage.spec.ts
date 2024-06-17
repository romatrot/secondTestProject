import { expect, type Locator, type Page } from '@playwright/test';

export class RozetkaMainPage{
    readonly page: Page;
    readonly shoes_clothesButton:Locator;
    readonly terminalButton:Locator;
    readonly FullTerminall:Locator;
    readonly SearchButton:Locator;
    readonly MenuButton:Locator;
    readonly UserIcon:Locator;
    readonly VacanciesButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.shoes_clothesButton=page.locator('//li[contains(@class,"ng-star-inserted")]//a[text()="Одяг, взуття та прикраси"]');
        this.terminalButton=page.locator('input[type="text"][class="search-form__input ng-untouched ng-pristine ng-valid"]');
        this.FullTerminall=page.locator('//input[@name="search"]');
        this.SearchButton=page.locator('[class="button button_color_green button_size_medium search-form__submit"]');
        this.MenuButton=page.locator('//button[@aria-label="Відкрити меню"]');
        this.UserIcon=page.locator('(//button[@type="button"][@class="header__button"])[2]');
        this.VacanciesButton=page.locator('//a[text()=" Вакансії "]');
    }

    async goto() {
        await this.page.goto('https://rozetka.com.ua/ua/');
        expect(this.page.url()).toBe('https://rozetka.com.ua/ua/');
    }

    async clickShoes_clothesButton(){
        await this.shoes_clothesButton.click();
    }

    async enterTerminal(search: string){
        // await this.terminalButton.click();
        await this.FullTerminall.fill(search);
        await this.SearchButton.click();
    }

    async openMenu(){
        await this.MenuButton.click();
    }

    async clickUserIcon(){
        await this.UserIcon.click();
    }

    async clickVacanciesButton(){
        await this.VacanciesButton.click();
    }
}