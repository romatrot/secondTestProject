import { expect, type Locator, type Page } from '@playwright/test';

export class Login{
    readonly page: Page;
    readonly LogInViaMail:Locator;
    readonly EmailTerminal:Locator;
    readonly PasswordTerminal:Locator;
    readonly ContinueButton:Locator;
    readonly InfoMessage:Locator;
    readonly CloseButton:Locator;

     constructor(page:Page){
        this.page=page;
        this.LogInViaMail=page.locator('//button[text()=" Увійти через пошту "]');
        this.EmailTerminal=page.locator('//input[@id="email"]');
        this.PasswordTerminal=page.locator('//input[@id="password"]');
        this.ContinueButton=page.locator('//button[text()=" Продовжити "]');
        this.InfoMessage=page.locator('//div[text()="Користувач з логіном "]');
        this.CloseButton=page.locator('//button[@aria-label="Закрити модальне вікно"]');
    }

    async clickLogInViaMail(){
        await this.LogInViaMail.click();
    }

    async fillEmail(){
        await this.EmailTerminal.fill('romantrocuk904@gmail.com');
    }

    async fillPassword(){
        await this.PasswordTerminal.fill('Roma2005');
    }

    async clickContinue(){
        await this.ContinueButton.click();
    }

    async verifyInfoMessage(){
        await expect(this.InfoMessage).toBeVisible();
    }

    async CloseLogin(){
        await this.CloseButton.click();
    }
}