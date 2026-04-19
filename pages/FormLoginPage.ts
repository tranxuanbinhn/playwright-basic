import {type Locator, type Page} from "@playwright/test";
import * as repo from '../utils/object-repositories-handler'
export class FormsLoginPage {
    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly submitBtn:Locator;

    constructor(page:Page){
        this.page = page;
        this.username = page.locator(repo.getAuthFormUsernameObject());
        this.password = page.locator(repo.getAuthFormPasswordObject());
        this.submitBtn = page.locator(repo.getAuthFormLoginBtnObject());

    }
    async enterUsername(username:string){
        await this.username.fill(username);
    }
    async enterPassword(password:string){
        await this.password.fill(password);
    }
     async clickLoginButton(){
        await this.submitBtn.click();
    }


    
}