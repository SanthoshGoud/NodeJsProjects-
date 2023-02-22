// // const ApacheArrow = require('apache-arrow');

// // async function readParquetFile() {
// //   const reader = await ApacheArrow.ParquetReader.openFile('C:/Users/ssaara/Downloads/metrics.parquet');
// //   const schema = reader.schema;
// //   const table = await reader.read();

// //   console.log(schema);
// //   console.log(table.toString());

// //   reader.close();
// // }

// // readParquetFile();
// // const Parquet= require('parquetjs');
// // const {File}= require('fs')

// // // Create a File object from the file path
// // const file = new File('C:\Users\ssaara\Downloads\metrics.parquet', 'r');

// // // Create a ParquetReader instance with the File object 
// // const reader = new Parquet.ParquetReader(file); 
 
// // // Read the entire file as a DataFrame 
// // const df = reader.read(); 
 
// // // Iterate over each row in the DataFrame and log it to console 
// // df.forEach(row => {  console.log(row); });



// const Parquet= require('parquetjs');
// const fs = require('fs');

// // Create a read stream from the file path
// const stream = fs.createReadStream('C:/Users/ssaara/Downloads/userdata2.parquet');

// console.log(stream);

   const parquet = require("parquetjs-lite");    

   const readParquetFile = async () => {
try{
  // create new ParquetReader
  var reader = await parquet.ParquetReader.openFile("C:/Users/ssaara/Downloads/userdata2.parquet");
  //var reader = await parquet.ParquetReader.openFile("C:/Users/ssaara/Downloads/metrics.parquet");
  // create a new cursor
  let cursor = reader.getCursor();

  // read all records from the file and print them
  let record = null;
  console.log(cursor);

  while ((record = await cursor.next())) {
    console.log(record);
  }
}
catch(error)
{
    console.log(error);
}

  await reader.close();
}
readParquetFile()