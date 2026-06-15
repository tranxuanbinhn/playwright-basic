import { readExcelData } from "utils/excel-Utils"

interface ILoginData{
    username: string
    password: string

}

export async function runScriptTest() {
    const filePath = './data/login.xlsx'
    const testData = await readExcelData(filePath, 'login') as ILoginData[];

    testData.forEach((testcase) => {
        console.log(testcase.username)
    })
    return testData;
}