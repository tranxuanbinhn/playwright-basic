import * as dotenv from 'dotenv'
import { PersionalDetailPage } from 'pages/PersionalDetailPage'
import {test, expect, Page} from '@playwright/test'

import playwrightConfig from 'playwright.config'
import { MenuBarPage } from 'pages/MenuBarPage'
import { Notification } from 'pages/NotificationPage'
import { runScriptTest } from 'types/IEditProfileData'

dotenv.config()
let page:Page
let menubar:MenuBarPage;
let myinfo:PersionalDetailPage;
let notifi:Notification;
let data : any;
test.beforeAll(async ({browser})=>{
     data = await runScriptTest()


})
test('Edit Myinfor Page', async({page})=>{
    await page.goto(process.env.UI as string);
    menubar = new MenuBarPage(page);
  
   await menubar.clickLinkMyinfo()
    myinfo = new PersionalDetailPage(page)
    await myinfo.enterFirstName(data.firstname);
    await myinfo.enterMiddleName(data.middlename)
    await myinfo.enterLastName(data.lastname)
    await myinfo.enterEmployeeId(data.employeeid)
    await myinfo.enterOtherId(data.otherid)
    await myinfo.enterDriveLicenseNumber(data.driverlicensenumber)
    await myinfo.enterDriverLicenseExpiryDate(data.driverlicenseexpirydate)
    await myinfo.selectnation(data.nation)
    await myinfo.selectMaritalStatus(data.maritalstatus)
    await myinfo.enterDateOfBirth(data.dateofbirth)
    await myinfo.chooseGener(data.gender)
    await myinfo.clickSave1Button()
    notifi = new Notification(page)
    await notifi.waitForSuccessNotifi()


})