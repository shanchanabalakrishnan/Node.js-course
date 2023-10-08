const fs = require('fs');

console.log('First Line');

// var data = fs.readFileSync('f1.txt');

// console.log('File 1 Data ->' + data);


// var data2 = fs.readFileSync('f2.txt');

// console.log('File 2 Data ->' + data2);


// var data3 = fs.readFileSync('f3.txt');

// console.log('File 3 Data ->' + data3);

fs.readFile('f1.txt', cb1)
function cb1(err, data){
    if(err){
console.log(err);
    }
    console.log('File 1 Data ->' + data);
    
fs.readFile('f2.txt', cb2)
}


function cb2(err, data2){
    if(err){
console.log(err);
    }
    console.log('File 2 Data ->' + data2);
    fs.readFile('f3.txt', cb3)
}


function cb3(err, data3){
    if(err){
console.log(err);
    }
    console.log('File 3 Data ->' + data3);
}

console.log('Last Line');