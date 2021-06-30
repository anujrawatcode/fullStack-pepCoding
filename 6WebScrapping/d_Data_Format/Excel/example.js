// wBook filepath
// wSheet name
// JSON data

const xlsx = require('xlsx');
const data = require('./ArrayObject.json');
const fs = require('fs');



function excelWriter() {
    // new workbook
    let newWB = xlsx.utils.book_new();

    // json data- > excel format convert
    let newWS = xlsx.utils.json_to_sheet(data);

    // append new WS in Wb    (newWb, ws ,sheetName)
    xlsx.utils.book_append_sheet(newWB, newWS, "sheet-1");

    xlsx.writeFile(newWB, "abc.xlsx");

}

function excelRead(filePath, sheetName) {

    if (fs.existsSync(filePath) == false)
        return [];
    let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return (ans);
}
// read file





