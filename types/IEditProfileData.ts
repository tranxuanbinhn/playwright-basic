import { readExcelData } from "utils/excel-Utils"

interface IEditProfileData{
    firstname:string
    middlename:string
    lastname:string
    employeeid:string
    otherid:string
    driverlicensenumber:string
    driverlicenseexpirydate:string
    nation:string
    maritalstatus:string
    dateofbirth:string
    gender:string


}

export async function runScriptTest() {
    const filePath = './data/editprofile.xlsx'
    const testData = await readExcelData(filePath, 'editprofile') as IEditProfileData[];
    console.log("excel data", testData)
    testData.forEach((testcase) => {
        console.log(testcase.firstname)
    })
    return testData[0];
}