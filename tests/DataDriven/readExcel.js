const XLSX = require("xlsx");

function readExcel() {
    const workbook = XLSX.readFile('D:/Ajensia/AjensiaLoginData.xlsx');
    const sheet = workbook.Sheets['Ajensia'];
    return XLSX.utils.sheet_to_json(sheet);  // Convert the sheet to JSON
}

module.exports = { readExcel };
