import { expect, type Locator, type Page } from '@playwright/test';

export class UltimateqaPage{
    readonly page :Page;

    constructor (page:Page){
        this.page=page;
    }

    protected getLocatorAtoggle() {
        return this.page.locator('//span[@id="A_toggle"]');
    }

    protected getLocatorInsideOfToggle() {
        return this.page.locator('//div[text()="Inside of toggle"]');
    }

    protected getLocatorNameAToggle() {
        return this.page.locator('//input[@name="et_pb_contact_name_1"]');
    }

    protected getLocatorEmailAddressAToggle() {
        return this.page.locator('//input[@name="et_pb_contact_email_1"]');
    }

    protected getLocatorMassegeAToggle() {
        return this.page.locator('//textarea[@id="et_pb_contact_message_1"]');
    }

    protected getLocatorResult() {
        return this.page.locator('//input[@name="et_pb_contact_captcha_1"]');
    }

    protected getLocatorSecondSubmitButton() {
        return this.page.locator('(//button[@class="et_pb_contact_submit et_pb_button"])[2]');
    }

    protected getLocatorPleaseFillText(text:string) {
        return this.page.locator(`//li[text()="${text}"]`)
    }

    async goTo() {
        await this.page.goto("https://ultimateqa.com/complicated-page");
    }

    async verifyLabel() {
        expect(this.getLocatorAtoggle()).toBeVisible();
    }

    async verifyInsideOfToggle() {
        await this.getLocatorAtoggle().click();
        expect(this.getLocatorInsideOfToggle()).toBeVisible();
    }

    async fillNameAToggle(name:string) {
        await this.getLocatorNameAToggle().fill(name);
    }

    async fillEmailAddressAToggle(email:string) {
        await this.getLocatorEmailAddressAToggle().fill(email);
    }

    async fillMassageAToggle(massege:string) {
        await this.getLocatorMassegeAToggle().fill(massege);
    }

    async fillResult(captcha :string) {
        await this.getLocatorResult().fill(captcha);
    }

    async clickSecondSubmiButton() {
        await this.getLocatorSecondSubmitButton().click();
    }

    async verifyPleaseFillText(text:string) {
        expect(this.getLocatorPleaseFillText(text)).toBeVisible();
    }

    async fillWrongAToggleValues(name:string , email:string , massege:string , captcha:string) {
        await this.fillNameAToggle(name);
        await this.fillEmailAddressAToggle(email);
        await this.fillMassageAToggle(massege);
        await this.fillResult(captcha);
        await this.clickSecondSubmiButton();
        if(!name){
            this.verifyPleaseFillText('Name');
        }
        if(!email){
            this.verifyPleaseFillText('Email Address');
        }else if(!email.includes('@gmail.com')){
            this.verifyPleaseFillText('Invalid email');
        }
        if(!massege){
            this.verifyPleaseFillText('Message');
        }
        if(!captcha){
            this.verifyPleaseFillText('Captcha');
        }
    }
}