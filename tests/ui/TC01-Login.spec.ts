import * as dotenv from 'dotenv';
import {FormsLoginPage} from '../../pages/FormLoginPage'
import { test, expect, Page } from '@playwright/test';
import { DashboardPage } from 'pages/DashboardPage';
import {runScriptTest} from '../../types/ILoginData'
dotenv.config()
let page:Page;
let formloginPage:FormsLoginPage;
let dashboard:DashboardPage;
let data : any;
test.beforeAll(async ({browser})=>{
     data = await runScriptTest()
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(process.env.UI as string)

})
test.beforeEach(async ()=>{
formloginPage = new FormsLoginPage(page);
})
test('Login', async()=>{
await formloginPage.enterUsername(data.username);
await formloginPage.enterPassword(data.password);
await formloginPage.clickLoginButton();
dashboard = new DashboardPage(page);
await expect(dashboard.extractMainTitle()).toHaveText(DashboardPage.main_Title); 
})