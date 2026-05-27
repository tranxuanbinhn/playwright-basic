import {test as setup} from "playwright/test";
import { FormsLoginPage } from "pages/FormLoginPage";
import * as dotenv from 'dotenv'
import { dot } from "node:test/reporters";
import { log } from "node:console";
import { expect } from "playwright/test";
import { DashboardPage } from "pages/DashboardPage";
dotenv.config();
const authFile = 'playwright/.auth/user.json';
let dashboard:DashboardPage;
setup('authenticate', async({page})=>{
    await page.goto(process.env.UI as string)
    const loginPage = new FormsLoginPage(page);
    await loginPage.enterUsername("Admin");
    await loginPage.enterPassword("admin123")
    await loginPage.clickLoginButton()
    dashboard = new DashboardPage(page);
    await expect(dashboard.extractMainTitle()).toHaveText(DashboardPage.main_Title); 
    await page.context().storageState({path:authFile});
})