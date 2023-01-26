//MKDIR, RENAME,
const {mkdir, rename} = require('fs').promises;

////MKDIR
// (async() => {

// await mkdir('./datanew/nodejs/filesystem', {
//     recursive: true, // making path if doesnt exist
// });

// })();

////RENAME
// (async() => {

//     try {
//     await rename('./datanew/nodejs/s.js','./datanew/nodejs/sss.txt');
// } catch(err) {
//     if (err.code === 'ENOENT') {
//         console.log('Given file does not exist.');
//     } else {
//         console.log('Ups!', err);
//     }
// }
// })();
//RENAME moving files
(async() => {

    try {
    await rename('./data/xyz.txt','./datanew/nodejs/newZyx.txt');  //rename is moving file
} catch(err) {
    if (err.code === 'ENOENT') {
        console.log('Given file does not exist.');
    } else {
        console.log('Ups!', err);
    }
}
})();
