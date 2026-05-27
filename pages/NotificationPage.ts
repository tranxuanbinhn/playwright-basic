import {expect, type Locator, type Page} from "@playwright/test";
import * as repo from '../utils/object-repositories-handler'
export class Notification{
    readonly page:Page;
    readonly successNotification:Locator

    constructor(page:Page){
        this.page = page
        this.successNotification = page.locator(repo.getSuccessNotificationObject())
    }

    async waitForSuccessNotifi(){
        await expect(this.successNotification).toBeVisible({timeout:10000})
    }
}