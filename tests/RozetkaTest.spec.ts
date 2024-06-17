import { test, expect } from '@playwright/test';
import { RozetkaMainPage } from '../pages/RozetkaMainPage.spec';
import { RozetkaShoes_clothesPage } from '../pages/RozetkaShoes_clothesPage.spec';
import { RozetkaMenu } from '../pages/component/RozetkaMenu.spec';
import { ChooseCity } from '../pages/component/ChooseCity.spec';
import { Login } from '../pages/component/Login.spec';
import { VacanciesPage } from '../pages/VacanciesPage.spec';

test('TestRozetka 1', async ({ page }) => {
    const rozetkaMainPage = new RozetkaMainPage(page);
    const rozetkaShoes_clothesPage = new RozetkaShoes_clothesPage(page);

    await rozetkaMainPage.goto();
    await rozetkaMainPage.clickShoes_clothesButton();
    await rozetkaShoes_clothesPage.clickManButton();
    await rozetkaShoes_clothesPage.clickshoes_clothesButton();
    await rozetkaShoes_clothesPage.waitForMansBacksAndAksesuarsLabel();
    await rozetkaShoes_clothesPage.verifyURL();
    await rozetkaShoes_clothesPage.clickbackpackButton();
    await rozetkaShoes_clothesPage.clickadidascheckbox();
    await rozetkaMainPage.enterTerminal("монітори");
});

test('Enter city',async({page}) =>{
    const rozetkaMainPage = new RozetkaMainPage(page);
    const rozetkaMenu=new RozetkaMenu(page);
    const chooseCity=new ChooseCity(page);

    await rozetkaMainPage.goto();
    await rozetkaMainPage.openMenu();
    await rozetkaMenu.clickCityButton();
    await chooseCity.fillCityTerminal();
    await chooseCity.clickUseButton();
    await rozetkaMainPage.openMenu();
    await rozetkaMenu.expectCityPrilutsk();
})

test('Rozetka login',async({page})=>{
    const rozetkaMainPage = new RozetkaMainPage(page);
    const login=new Login(page);

    await rozetkaMainPage.goto();
    await rozetkaMainPage.clickUserIcon();
    await login.clickLogInViaMail();
    await login.fillEmail();
    await login.fillPassword();
    await login.clickContinue();
    // await login.verifyInfoMessage();
    await login.CloseLogin();
})

test('Rozetka Vacancies',async({page})=>{
    const rozetkaMainPage = new RozetkaMainPage(page);
    const vacanciesPage = new VacanciesPage(page);

    await rozetkaMainPage.goto();
    await rozetkaMainPage.clickVacanciesButton();
    await vacanciesPage.verifyVacanciesTitle();
    await vacanciesPage.clickDirectionIT();
    await vacanciesPage.verifySecurityOperationEngineerTitle();
})