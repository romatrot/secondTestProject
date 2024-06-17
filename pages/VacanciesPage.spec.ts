import { expect, type Locator, type Page } from '@playwright/test';

export class VacanciesPage{
    readonly page:Page;
    readonly VacanciesTitle:Locator;
    readonly DirectionIT:Locator;
    readonly SecurityOperationEngineerTitle:Locator;

    constructor(page:Page){
        this.page=page;
        this.VacanciesTitle=page.locator('//h5[text()="Пошук вакансії"]');
        this.DirectionIT=page.locator(' //a[text()=" Напрям IT "]');
        this.SecurityOperationEngineerTitle=page.locator('//p[@class="vacancy__heading"]');
    }

    async verifyVacanciesTitle() {
        await expect(this.VacanciesTitle).toBeVisible();
    }

    async clickDirectionIT() {
        await this.DirectionIT.click();
    }

    async verifySecurityOperationEngineerTitle() {
        await expect(this.SecurityOperationEngineerTitle).toBeVisible();
    }
}