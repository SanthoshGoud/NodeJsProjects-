// const fs = require('fs');

// // Create a File object from the file path
// const file = fs.createReadStream('C:/Users/ssaara/Downloads/userdata2.parquet');

// // Create a ParquetReader instance with the File object 

// const reader = new Parquet.ParquetReader(file); 
 
// // Read the entire file as a DataFrame 
// const df = reader.read(); 

// // Iterate over each row in the DataFrame and log it to console 
// df.forEach(row => {  console.log(row); });

// const fs = require('fs');
// const arrow = require('apache-arrow');
// fs.readFile('C:/Users/ssaara/Downloads/userdata2.parquet', (err, data) => {
//   if (err) throw err;
//   const buffer = Buffer.from(data);
//   console.log(buffer);
//  const table = arrow.Table.from([buffer]);
//   console.log(table.toString());
// });

//

// const parquetjs = require('parquetjs'); 
//   try {
// //reading the parquet file 
// parquetjs.ParquetReader.openFile('C:/Users/ssaara/Downloads/userdata2.parquet') 
//     .then(reader => { 
//         //reading each row of the file 
//         reader.forEachRow(row => { 
//             console.log(row); 
//         }); 
//     });
// } catch (error) {
//     console.log(error);
// }

// const parquet = require('parquet-mr');
// const fs = require('fs');
// const fileStream = fs.createReadStream('your_parquet_file.parquet');
// const reader = parquet.ParquetReader.create(fileStream);
// reader.getRowCount().then((rowCount) => {
//   console.log(`Number of rows: ${rowCount}`);
//   return reader.readAll();
// }).then((rows) => {
//   console.log(rows);
// });

// const Parquet= require('parquetjs');
// const fs = require('fs');

// // Create a read stream from the file path
// const stream = fs.createReadStream('C:\Users\ssaara\Downloads\metrics.parquet');

// // Create a ParquetReader instance with the read stream 
// const reader = new Parquet.ParquetReader(stream); 
 
// // Read the entire file as a DataFrame 
// const df = reader.read(); 
 
// // Iterate over each row in the DataFrame and log it to console 
// df.forEach(row => {  console.log(row); });


// const fs = require('fs');
// const arrow = require('arrow');
// const fileStream = fs.createReadStream('C:\Users\ssaara\Downloads\metrics.parquet');
// const reader = arrow.ParquetReader.create(fileStream);
// reader.getRowCount().then((rowCount) => {
//   console.log(`Number of rows: ${rowCount}`);
//   return reader.readAll();
// }).then((rows) => {
//   console.log(rows);
// });

const parquet=require('parquet')
const readParquet = async () => {

    const filePath = 'C:\Users\ssaara\Downloads\metrics.parquet'; // 'snappy';
  
    console.log('----- reading file : ', filePath);
    let reader = await parquet.ParquetReader.openFile(filePath);
    console.log('---- ParquetReader initialized....');
  
    // create a new cursor
    let cursor = reader.getCursor();
  
    // read all records from the file and print them
    if (cursor) {
      console.log('---- cursor initialized....');
  
      let record = await cursor.next() ; // this line throws exception
      while (record) {
        console.log(record);
        record = await cursor.next();
      }
    }
  
    await reader.close();
    console.log('----- done with reading parquet file....');
  
    return;
  };


  let dt = readParquet();
dt.then((value) => console.log('--------SUCCESS', value))
  .catch((error) => {
    console.log('-------FAILURE ', error); // Random error
    console.log(error.stack);
  })