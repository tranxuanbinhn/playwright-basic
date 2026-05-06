import {type Locator, type Page} from "@playwright/test";
import * as repo from '../utils/object-repositories-handler'
export class MyInfoPage {
    readonly page:Page;
    readonly firstname:Locator;
    readonly middlename:Locator;
    readonly lastname:Locator;
    readonly id:Locator;
    readonly otherid:Locator;
    readonly driverlicensenumber:Locator;
    readonly driverlicenseexpirydate:Locator;
    readonly nationality:Locator;
    readonly maritalstatus:Locator;
    readonly dateofbirth:Locator;
    readonly malegender:Locator;
    readonly femalegender:Locator;
    readonly buttonsave1:Locator;

    constructor(page:Page){
        this.page = page;
        this.firstname = page.locator(repo.getPersionalDetailInputFirstnameObject())
        this.middlename = page.locator(repo.getPersionalDetailInputMiddlenameObject())
        this.lastname = page.locator(repo.getPersionalDetailInputLastnameObject())
        this.id = page.locator(repo.getPersionalDetailInputEmployeeidObject())
        this.otherid = page.locator(repo.getPersionalDetailInputOtherIdObject())
        this.driverlicensenumber = page.locator(repo.getPersionalDetailDriverLicensedObject())
        this.driverlicenseexpirydate = page.locator(repo.getPersionalDetailDriverLicensedExdateObject())\
        this.nationality = page.locator(repo.getPersionalDetailNationalyObject())
        this.maritalstatus = page.locator(repo.getPersionalDetaiMaritalstatusObject())
        this.dateofbirth = page.locator(repo.getPersionalDetaiDateOfBirthObject())
        this.malegender = page.locator(repo.getPersionalDetaiGenderMaleObject())
        this.femalegender = page.locator(repo.getPersionalDetaiGenderFemaleObject())
        this.buttonsave1 = page.locator(repo.getPersionalDetaiButtonSave1Object())
    }

    async enterFirstName(firstname:string){
        await this.firstname.fill(firstname)
    }
    async enterMiddleName(middlename:string){
        await this.firstname.fill(middlename)
    }
    async enterLastName(lastname:string){
        await this.lastname.fill(lastname)
    }
    async enterEmployeeId(empployeeid:string){
        await this.id.fill(empployeeid)
    }
    async enterOtherId(otherid:string){
        await this.otherid.fill(otherid)
    }
     async enterDriveLicenseNumber(drivernumber:string){
        await this.driverlicensenumber.fill(drivernumber)
    }
    async enterDriverLicenseExpiryDate(date: string) {
        await this.driverlicenseexpirydate.fill(date);
    }
    async enterDateOfBirth(date: string) {
        await this.dateofbirth.fill(date);
    }
    
    
}