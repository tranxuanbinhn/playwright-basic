import {expect, type Locator, type Page} from "@playwright/test";
import * as repo from '../utils/object-repositories-handler'
export class EmergencyContactPage {
    readonly page:Page;
    readonly buttonAdd:Locator;
    readonly name:Locator;
    readonly releationship:Locator;
    readonly hometelephone:Locator;
    readonly mobile:Locator;
    readonly worktelephone:Locator;
    readonly buttonsave:Locator;
    readonly mainTitle:Locator;
    readonly emergencyContactLink:Locator;
    readonly buttonDelete:Locator;
    readonly buttonDeleteConfirm;
    readonly editMainTitle:Locator;
    readonly loadSpinner:Locator;
    constructor(page:Page){
        this.page = page;
        this.buttonAdd = page.locator(repo.getEmergencyContactButtonAddObject());
        this.name = page.locator(repo.getEmergencyContactAddPageInputNameObject());
        this.releationship = page.locator(repo.getEmergencyContactAddPageRelationShipInputObject());
        this.hometelephone = page.locator(repo.getEmergencyContactAddPageHomeTelephoneInputObject());
        this.mobile = page.locator(repo.getEmergencyContactAddPageMobileInputObject());
        this.worktelephone = page.locator(repo.getEmergencyContactAddPageWorkTelephoneInputObject());
        this.buttonsave = page.locator(repo.getEmergencyContactAddPageWorkSaveButtonObject());
        this.mainTitle = page.locator(repo.getEmergencyContactMainTitleObject())
        this.emergencyContactLink = page.locator(repo.getEmergencyContactLinkObject())
        this.buttonDelete = page.locator(repo.getEmergencyContactButtonDeleteObject())
        this.buttonDeleteConfirm = page.locator(repo.getEmergencyContactButtonDeleteConfirmObject())
        this.editMainTitle = page.locator(repo.getEmergencyContactEditMainTitleObject())
        this.loadSpinner = page.locator(repo.getEmergencyContactLoadSpinnerObject())
    }
    async clickAddEmergencyContactButton(){
        await this.buttonAdd.click()
    }
    async assertTextMainTitle(){
        await expect(this.mainTitle).toHaveText("Save Emergency Contact")
    }
    async assertTextMainTitleEdit(){
        await expect(this.editMainTitle).toHaveText("Edit Emergency Contact")
    }
    async enterName(name:string){
       
        await this.name.fill(name)
    }
     async enterNameEdit(name:string){
        await expect(this.loadSpinner.first()).toBeHidden({timeout:10000})
        await this.name.fill(name)
    }
    async enterRelationship(relationship:string){
        await this.releationship.fill(relationship)
    }
    async enterHometelephone(hometelephone:string){
        await this.hometelephone.fill(hometelephone)
    }async enterMobile(mobile:string){
        await this.mobile.fill(mobile)
    }async enterWorktelephone(worktelephone:string){
        await this.worktelephone.fill(worktelephone)
    }
    async clickSaveButton(){
        await this.buttonsave.click()
    }
    async clickLinkEmergencyContact(){
        await this.emergencyContactLink.waitFor({state:'visible'})
        await this.emergencyContactLink.click()
    }
    async tickCheckBoxByName(name:string){
        await this.page.locator('.oxd-table-card')
        .filter({hasText:name})
        .first()
        .locator('.oxd-checkbox-wrapper')
        .click()
    }
    async clickButtonDelete(){
        if(await this.buttonDelete.isVisible()){
            await this.buttonDelete.click()
        }
        if(await this.buttonDeleteConfirm.isVisible()){
            await this.buttonDeleteConfirm.click()
        }
    }
    async clickEditButtonByName(name:string){
        await this.page.locator('.oxd-table-card')
        .filter({hasText:name})
        .first()
        .locator('//button[2]')
        .click()
    }
    
}