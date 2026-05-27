import { type Locator, type Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler'
 export class MenuBarPage {
    readonly page:Page;
    readonly linkDashboard: Locator;
    readonly linkAdmin: Locator;
    readonly linkMyinfo:Locator;

    constructor(page:Page){
        this.page = page;
        this.linkDashboard = page.locator(repo.getNavigationDashbarMenubar())
        this.linkAdmin = page.locator(repo.getNavigationAdminMenubar())
        this.linkMyinfo = page.locator(repo.getNavigationMyinfoMenubar())

    }
    async clickLinkDashboard(){
        await this.linkDashboard.click()
    }
    async clickLinkMyinfo(){
        await this.linkMyinfo.waitFor({state:'visible'})
        await this.linkMyinfo.click()
    }
 }