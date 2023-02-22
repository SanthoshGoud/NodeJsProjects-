// const {ParquetReader} = require('parquetjs');

// (async () => {
//     try {
//         let reader = await ParquetReader.openFile('C:/Users/ssaara/Downloads/metrics.parquet');
//         // create a new cursor
//         let cursor = reader.getCursor();
//         // read all records from the file and print them
//         let record = null;

//         // loop through each record and print out the values of each column 
//         while (record = await cursor.next()) {
//             console.log("Name: " + record.name); 
//             console.log("Age: " + record.age); 
//             console.log("Height: " + record.height); 
//             console.log("Weight: " + record.weight); 

//         }

//     } catch(err) {
//       console.error(err)
//     }

//   })();


// const fs = require('fs');
// const parquet = require('parquetjs');
// const fileStream = fs.createReadStream('C:/Users/ssaara/Downloads/metrics.parquet');
// const reader = new parquet.ParquetReader(fileStream);
// reader.read((record) => {
//   console.log(record);
// });
