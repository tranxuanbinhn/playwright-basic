import { Locator, Page } from "@playwright/test";
import * as repo from '../utils/object-repositories-handler'
export class DashboardPage {
    readonly page:Page;
    static main_Title="Dashboard"

    constructor(page:Page){
        this.page = page;
     
    }
    extractMainTitle(){
        return this.page.locator(repo.getMainTitleObject());
    }

}