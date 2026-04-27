export const myinfo = {
    main_title:'h6:has-text("PIM")',
    full_name:'//div[contains(@class, "orangehrm-edit-employee-imagesection")]/div[contains(@class, "orangehrm-edit-employee-name")]/h6[contains(@class, "oxd-text--h6")]',
    navigation:{
        persional_detail:'a:has-text("Personal Detail")',
        contact_detail:'a:has-text("Contact Detail")',
        emergency_contacts:'a:has-text("Emergency Contact")',
        dependent:'a:has-text("Dependents")',
        immigration:'a:has-text("Immigration")',
        job:'a:has-text("Job")',
        salary:'a:has-text("Salary")',
        report_to:'a:has-text("Report-to")',
        qualifications:'a:has-text("Qualifications")',
        memberships:'a:has-text("Memberships")'
    },
    employ_img:'//div[contains(@class,"orangehrm-edit-employee-image-wrapper")]//div[contains(@class,"orangehrm-edit-employee-image")]/img[contains(@class,"employee-image")]',
    persional_detail:{
        main_title:'h6:has-text("Personal Details")',
        input_firstname:'//div[contains(@class,"orangehrm-vertical-padding")]//input[contains(@class,"orangehrm-firstname")]',
        input_middlename:'//div[contains(@class,"orangehrm-vertical-padding")]//input[contains(@class,"orangehrm-middlename")]',
        input_lastname:'//div[contains(@class,"orangehrm-vertical-padding")]//input[contains(@class,"orangehrm-lastname")]',
        input_nickname:'//label[text()="Nickname"]/parent::div/following-sibling::div/input',
        input_employeeid:'//label[text()="Employee Id"]/parent::div/following-sibling::div/input',
        input_otherid:'//label[text()="Other Id"]/parent::div/following-sibling::div/input',
        input_licensenumber:'//label[contains(text(),"License Number")]/parent::div/following-sibling::div/input',
        input_licensen_exdate:'//label[contains(text(),"License Expiry Date")]/parent::div/following-sibling::div//input',
        select_nationaly:'//label[contains(text(),"Nationality")]/parent::div/following-sibling::div//div[contains(@class,"oxd-select-text--active")]',
        select_nationaly_selected:'//label[contains(text(),"Nationality")]/parent::div/following-sibling::div//div[contains(@class,"oxd-select-text-input")]',
        select_maritalstatus_selected:'//label[contains(text(),"Marital Status")]/parent::div/following-sibling::div//div[contains(@class,"oxd-select-text-input")]',
        select_maritalstatus:'//label[contains(text(),"Marital Status")]/parent::div/following-sibling::div//div[contains(@class,"oxd-select-text--active")]',
        input_dateofbirth:'//label[contains(text(),"Date of Birth")]/parent::div/following-sibling::div//input',
        radio_gender_male:'//label[text()="Gender"]/parent::div/following-sibling::div//input[@value="1"]',
        radio_gender_female:'//label[text()="Gender"]/parent::div/following-sibling::div//input[@value="2"]',
        button_save1:'//div[@class="orangehrm-horizontal-padding orangehrm-vertical-padding"]//button[@type="submit"][normalize-space()="Save"]'




        //page.locator('//label[text()="Other Id"]/parent::div/following-sibling::div/input')
        //page.locator('//div[contains(@class,"orangehrm-vertical-padding")]//input[contains(@class,"orangehrm-firstname")]')
    }
}