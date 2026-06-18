import * as dotenv from 'dotenv'
import { PersionalDetailPage } from 'pages/PersionalDetailPage'
import {test, expect, Page} from '@playwright/test'

import playwrightConfig from 'playwright.config'
import { MenuBarPage } from 'pages/MenuBarPage'
import { EmergencyContactPage } from 'pages/EmergencyContactPage'
import { Notification } from 'pages/NotificationPage'
import { runScriptTestAdd, runScriptTestDelete, runScriptTestEdit } from 'types/IEmergencyContact'


dotenv.config()
let page:Page
let menubar:MenuBarPage;
let emergency:EmergencyContactPage;
let notifi:Notification;
let dataAdd:any;
let dataEdit:any;
let dataDelete:any;

test.beforeAll(async ({browser})=>{
    dataAdd = await runScriptTestAdd()
    dataEdit = await runScriptTestEdit()
    dataDelete = await runScriptTestDelete()
})
test('Add Emergency Contact', async({page})=>{
  
    await page.goto(process.env.UI as string);
    menubar = new MenuBarPage(page);
    await menubar.clickLinkMyinfo()
    emergency = new EmergencyContactPage(page);
    await emergency.clickLinkEmergencyContact()
    await emergency.clickAddEmergencyContactButton()
    await emergency.assertTextMainTitle()
    await emergency.enterName(dataAdd.name)
    await emergency.enterRelationship(dataAdd.relationship)
    await emergency.enterHometelephone(dataAdd.hometelephone)
    await emergency.enterMobile(dataAdd.mobile)
    await emergency.enterWorktelephone(dataAdd.worktelephone)
    await emergency.clickSaveButton()
    notifi = new Notification(page)
    await notifi.waitForSuccessNotifi()
})
test('Edit Emergency Contact', async({page})=>{
   
    await page.goto(process.env.UI as string);
    menubar = new MenuBarPage(page);
    await menubar.clickLinkMyinfo()
    emergency = new EmergencyContactPage(page);
    await emergency.clickLinkEmergencyContact()
    await emergency.clickEditButtonByName(dataEdit.nameeditchose)
    await emergency.assertTextMainTitleEdit()
    await emergency.enterNameEdit(dataEdit.name)
    await emergency.enterRelationship(dataEdit.relationship)
    await emergency.enterHometelephone(dataEdit.hometelephone)
    await emergency.enterMobile(dataEdit.mobile)
    await emergency.enterWorktelephone(dataEdit.worktelephone)
    await emergency.clickSaveButton()
    notifi = new Notification(page)
    await notifi.waitForSuccessNotifi()
})
test('Delete Emergency Contact', async({page})=>{
    await page.goto(process.env.UI as string);
    menubar = new MenuBarPage(page);
    await menubar.clickLinkMyinfo()
    emergency = new EmergencyContactPage(page);
    await emergency.clickLinkEmergencyContact()
    await emergency.tickCheckBoxByName(dataDelete.namedelete)
    await emergency.clickButtonDelete()
    notifi = new Notification(page)
    await notifi.waitForSuccessNotifi()
})