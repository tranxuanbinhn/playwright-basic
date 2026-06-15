import ExcelJS from 'exceljs'
export async function readExcelData(filePath:string, sheetName:string){
    const workbook =new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet(sheetName)

    if(!worksheet){
        throw new Error(`Sheet ${sheetName} not exist in ${filePath}`)
    }
    const data: Record<string, any>[] = [];
    const headers:string[]= [];
    const firstrow = worksheet.getRow(1);
    firstrow.eachCell({includeEmpty:false},(cell)=>{
        const headerValue = cell.value?.toString().trim();
        if(headerValue){
            headers.push(headerValue)
        }
    });
    worksheet.eachRow({includeEmpty:false}, (row, rowNumber)=>{
        if(rowNumber > 1){
            const rowData: Record<string, any> = {}
            headers.forEach((header, index)=>{
                const cellValue = row.getCell(index+1).value;
                if(cellValue && typeof cellValue === 'object' && 'result' in cellValue){
                    rowData[header] = cellValue.result?.toString()
                }
                else
                {
                    rowData[header] = cellValue !== null && cellValue != undefined ? cellValue.toString() : '';

                }
            })
            data.push(rowData)
        }
    })
    return data

}