// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
      
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

// 1. store json files in array 'filelist'
// 2. loop through fileList and do: 
// fs.readfile wrapped in Promised
// 3. if error fount, store the Error type
// 4. otherwise, process and return data in processData(dataset)
// 5. push data to result[]
// 6. call fnCallback




const bacaData = null;


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
