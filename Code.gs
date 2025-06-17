function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Official Gazette Updater');
}

function submitForm(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const timestamp = new Date();
  sheet.appendRow([
    timestamp,
    data.arabicTitle,
    data.englishTitle,
    data.type,
    data.itemNumber,
    data.issuedBy,
    data.dateIssued,
    data.gazetteNumber,
    data.gazetteDate
  ]);
  return timestamp.toLocaleString(); // return timestamp for tracking
}

function getSheetData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];

  const headers = values[0];
  const rows = values.slice(1);

  return rows.map(row => {
    const entry = {};
    headers.forEach((header, i) => {
      entry[header] = (row[i] === undefined || row[i] === null)
        ? ""
        : (row[i] instanceof Date ? row[i].toLocaleString() : row[i]);
    });
    return entry;
  });
}

function deleteRowByTimestamp(timestamp) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const cellValue = data[i][0];
    const cellTimestamp = cellValue instanceof Date ? cellValue.toLocaleString() : cellValue;
    if (cellTimestamp === timestamp) {
      sheet.deleteRow(i + 1);
      return true;
    }
  }
  return false;
}

