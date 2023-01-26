/* 1. Write to file ./data/input1.json such data::
    [1,2,7,20,56,22]
    Write a program to open this file
    then sum all the numbers and write this sum to file ./data/sum.txt
    
*/
const {readFile, writeFile} = require('fs').promises;

//reading file

const READ_FILE_PATH = './data/input1.json';
const WRITE_FILE_PATH = './data/sum.txt';
//when ends
(async () => {
    try {
        //json to table (parse)
        const arrayData = JSON.parse(await readFile(READ_FILE_PATH, 'utf8'));
        //console.log(arrayData);
        //summing
        const values = Object.values(arrayData);
        const sum = values.reduce((acc, curr) => {
        return acc + curr;
        });
        //console.log(sum);
        //writing file
        writeFile(WRITE_FILE_PATH, `Sum of numbers given in file ${READ_FILE_PATH} is: \n${String(sum)}`, 'utf8');
        console.log('File is saved');

    } catch(err) {
        console.log("something went wrong", err);
    }
})();


   //    const numberData = await arrayData.map(num => {
    //     return parseInt(num, 10);
    //    });
    //    console.log(numberData);