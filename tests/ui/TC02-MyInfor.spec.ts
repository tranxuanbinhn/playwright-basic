import * as dotenv from 'dotenv'
import { MyInfoPage } from 'pages/MyInforPage'
import {test, expect, Page} from '@playwright/test'

import playwrightConfig from 'playwright.config'
import { MenuBarPage } from 'pages/MenuBarPage'
import { Notification } from 'pages/NotificationPage'

dotenv.config()
let page:Page
let menubar:MenuBarPage;
let myinfo:MyInfoPage;
let notifi:Notification;

test('Edit Myinfor Page', async({page})=>{
    await page.goto(process.env.UI as string);
    menubar = new MenuBarPage(page);
  
   await menubar.clickLinkMyinfo()
    myinfo = new MyInfoPage(page)
    await myinfo.enterFirstName("Tran");
    await myinfo.enterMiddleName("ha")
    await myinfo.enterLastName("Linh")
    await myinfo.enterEmployeeId("linh2212")
    await myinfo.enterOtherId("9871995")
    await myinfo.enterDriveLicenseNumber("98461")
    await myinfo.enterDriverLicenseExpiryDate("2028-11-11")
    await myinfo.selectnation("Vietnamese")
    await myinfo.selectMaritalStatus("Single")
    await myinfo.enterDateOfBirth("2001-01-02")
    await myinfo.chooseGener(0)
    await myinfo.clickSave1Button()
    notifi = new Notification(page)
    await notifi.waitForSuccessNotifi()


})