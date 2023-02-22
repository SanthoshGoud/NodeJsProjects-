const fs = require('fs');
const arrow = require('apache-arrow');
fs.readFile('C:/Users/ssaara/Downloads/metrics.parquet', (err, data) => {
  if (err) throw err;
  const buffer = Buffer.from(data);
  const table = arrow.Table.from([buffer]);
  console.log(table.toString());
});