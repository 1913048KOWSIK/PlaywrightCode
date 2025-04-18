const XLSX = require("xlsx");
const path = require("path");

function readExcel() {
    const filePath = path.resolve(__dirname, "../test-data/AjensiaLoginData.xlsx");
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets["Ajensia"];
    return XLSX.utils.sheet_to_json(sheet); // Convert the sheet to JSON
}

module.exports = { readExcel };
