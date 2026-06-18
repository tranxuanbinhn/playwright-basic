import { readExcelData } from "utils/excel-Utils"

interface IEmergencyContact{
    name:string
    relationship:string
    hometelephone:string
    mobile:string
    worktelephone:string
    nameeditchose:string
    namedelete:string


}

export async function runScriptTestAdd() {
    const filePath = './data/emergencycontact.xlsx'
    const testData = await readExcelData(filePath, 'addcontact') as IEmergencyContact[];
    console.log("excel data", testData)
   
    return testData[0];
}
export async function runScriptTestEdit() {
    const filePath = './data/emergencycontact.xlsx'
    const testData = await readExcelData(filePath, 'editcontact') as IEmergencyContact[];
    console.log("excel data", testData)
   
    return testData[0];
}
export async function runScriptTestDelete() {
    const filePath = './data/emergencycontact.xlsx'
    const testData = await readExcelData(filePath, 'deletecontact') as IEmergencyContact[];
    console.log("excel data", testData)
   
    return testData[0];
}