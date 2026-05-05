const csv = require("csvtojson");

function convertCsvToJson(inputPath) {
  return csv().fromFile(inputPath);
}

module.exports = { convertCsvToJson };