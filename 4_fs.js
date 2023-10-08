//files system
const fs = require('fs');

//read file
// const fileContent = fs.readFileSync('./f1.txt', )
// console.log( 'data of file 1->' + fileContent);


// //write file

// fs.writeFileSync('./f2.txt', 'This is the f2 node.js file ');
// console.log('File has been written');

// //append file
// fs.appendFileSync('f3.txt', ' This is the udated file');
// console.log('File has been updated');

// //delete file
// fs.unlinkSync('f2.txt');
// console.log('File has been deleted');

//make directory
//fs.mkdirSync('myDirectory');

//check the content inside of a direcory


// let folderContent = fs.readdirSync('F:\\The Ultimate Node.js Course\\myDirectory');
// console.log('folder Content', folderContent);


let doesExist = fs.existsSync('3_path.js');
console.log(doesExist);

fs.rmdirSync('myDirectory')
console.log('Flle has been removed');
