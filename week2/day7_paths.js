//BASENAME
const {basename} = require('path');

// console.log(__dirname);
// console.log(__filename);

const myDirPath = 'C:\\Users\\aleksandra.karlo\\Desktop'  //double slash can be used like this

const myDirPath2 = 'C:/Users/aleksandra.karlo/Desktop' // or path can be done like this

console.log(basename(myDirPath2)); //shows only last part of a path


//JOIN
const {join} = require('path');

const fullPath = join(__dirname, process.argv[2]);

console.log(fullPath);


//DIRNAME, EXTNAME
const {basename, dirname, extname} = require('path');

console.log('dirname', dirname(__dirname));
/**
 * __filename = C:\Users\aleksandra.karlo\Desktop\Learning\MegaK2\MegaK2\week2\day7_paths.js
 * __dirname = C:\Users\aleksandra.karlo\Desktop\Learning\MegaK2\MegaK2\week2\
 * dirname(__dirname) = C:\Users\aleksandra.karlo\Desktop\Learning\MegaK2\MegaK2
 * dirname(__filename) = C:\Users\aleksandra.karlo\Desktop\Learning\MegaK2\MegaK2\week2\
 */

console.log('basename', basename(__dirname));
/**
 * __dirname = C:\Users\aleksandra.karlo\Desktop\Learning\MegaK2\MegaK2\week2\
 */
const userPath = process.argv[2];

console.log('dirname', dirname(userPath));
console.log('basename', basename(userPath));
console.log('extname', extname(userPath));


//NORMALIZE, JOIN
const {normalize, join} = require('path');

const userPath2 = normalize(join(__dirname, process.argv[2])); //normalize should make a path readable

console.log(userPath2);
