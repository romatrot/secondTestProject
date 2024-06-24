import { test, expect } from '@playwright/test';
import { SwagLabsRegistrationPage } from '../pages/SwagLabsRegistrationPage.spec';
import { SwagLabsProductsPage } from '../pages/SwagLabsProductsPage.spec';
import { TheInternetHerokuappPage } from '../pages/TheInternetHerokuappPage.spec';
import { basicAuth } from '../pages/component/basicAuth.spec';
import { UltimateqaPage } from '../pages/UltimateqaPage.spec';
import { GoodTasks } from '../pages/GoodTasks.spec';

test('Swag Labs first test',async({page})=>{
    const swagLabsRegistrationPage = new SwagLabsRegistrationPage(page);
    const swagLabsProductsPage = new SwagLabsProductsPage(page);

    await swagLabsRegistrationPage.goto();
    await swagLabsRegistrationPage.fillUsername();
    await swagLabsRegistrationPage.fillPassword();
    await swagLabsRegistrationPage.clickLoginButton();
    await swagLabsProductsPage.verifyTitle();
    await swagLabsProductsPage.chooseLabel();
})

test('Swag Labs second test',async({page})=>{
    const swagLabsRegistrationPage = new SwagLabsRegistrationPage(page);
    const swagLabsProductsPage = new SwagLabsProductsPage(page);
    const textLabel = ["Sauce Labs Backpack" , "Sauce Labs Bike Light" , "Sauce Labs Bolt T-Shirt"];
    
    await swagLabsRegistrationPage.goto();
    await swagLabsRegistrationPage.fillUsername();
    await swagLabsRegistrationPage.fillPassword();
    await swagLabsRegistrationPage.clickLoginButton();
    await swagLabsProductsPage.verifyTitle();
    await swagLabsProductsPage.verifyElementByText("Sauce Labs Backpack");
    await swagLabsProductsPage.verifyElementByText("Sauce Labs Bike Light");
    await swagLabsProductsPage.verifyElementByText("Sauce Labs Bolt T-Shirt");
    await swagLabsProductsPage.verifyElementByTextArray(textLabel);
})

test('the-internet herokuapp Test',async({page})=>{
    const theInternetHerokuappPage = new TheInternetHerokuappPage(page);

    await basicAuth(page, "Roma", "admin");
    await theInternetHerokuappPage.goTo();
    await theInternetHerokuappPage.clickButtonText("Basic Auth");
})

test("Ultimateqa",async ({page})=>{
    const ultimateqaPage=new UltimateqaPage(page);

    await ultimateqaPage.goTo();
    await ultimateqaPage.verifyLabel();
    await ultimateqaPage.verifyInsideOfToggle();
    await ultimateqaPage.fillWrongAToggleValues("Roma","roma","hi","1");
})

test('Good tasks',async({page})=>{
    const goodTasks = new GoodTasks;
    console.log(await goodTasks.WordBack("Hello"));
    console.log(await goodTasks.RandomNumder(8));
})