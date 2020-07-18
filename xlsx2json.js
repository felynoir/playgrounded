const fs = require("fs");
const XLSX = require("xlsx");
const workbook = XLSX.readFile("inf.xlsx");
const sheet_name_list = workbook.SheetNames;

const sheet = workbook.Sheets[sheet_name_list[0]];
var range = XLSX.utils.decode_range(sheet["!ref"]);
const jsonObj = {};
for (let rowNum = range.s.r + 5; rowNum <= range.e.r; rowNum++) {
  const obj = {};
  for (let i = 0; i < 14; i++) {
    const cell = sheet[XLSX.utils.encode_cell({ r: rowNum, c: i })];
    obj[i] = cell ? cell.v : undefined;
  }
  jsonObj[rowNum - 5] = obj;
}

fs.writeFile("inf.json", JSON.stringify(jsonObj), "utf8", (err) => {
  if (err) console.log(err);
});
