import { expect, type Locator, type Page } from '@playwright/test';

export class SwagLabsRegistrationPage{
    readonly page: Page;
    readonly Username:string;
    readonly UsernameTerminal:Locator;
    readonly Password:string;
    readonly PasswordTerminal:Locator;
    readonly LoginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.Username="standard_user";
        this.UsernameTerminal=page.locator('//input[@id="user-name"]');
        this.Password="secret_sauce";
        this.PasswordTerminal=page.locator('//input[@id="password"]');
        this.LoginButton=page.locator('//input[@id="login-button"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        expect(this.page.url()).toBe("https://www.saucedemo.com/");
    }

    async fillUsername() {
        await this.UsernameTerminal.fill(this.Username);
    }

    async fillPassword() {
        await this.PasswordTerminal.fill(this.Password);
    }

    async clickLoginButton() {
        await this.LoginButton.click();
    }

}