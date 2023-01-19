const { writeFile, readFile, appendFile} = require('fs').promises;


const FILE_NAME = './data/hello.txt';


(async () => {
    try {
       
        const numberFromFile = (await readFile(FILE_NAME, 'utf8')).split('\n');
        console.log(numberFromFile);
        await appendFile(FILE_NAME, `\n\n${numberFromFile[numberFromFile.length-1] * 2}`, 'utf8');
        
        console.log('File is saved');


    } catch (err) {
        console.log('Impossibl to write such file!', err);
    }
}) ();



//ASYNC VERSION
// (async () => {
//     try {
       
//         const numberFromFile = Number(await readFile(FILE_NAME, 'utf8'));
//         await writeFile(FILE_NAME, String(numberFromFile * 2), 'utf8');
        
//         console.log('File is saved');


//     } catch (err) {
//         console.log('Impossibl to write such file!', err);
//     }
// })();


// // CALLBACK VERSION
// readFile(FILE_NAME, 'utf8',(error, data) => {
//     if(error) {
//         console.log('Impossibl to write such file!', error);
//     } else {
//         const numberFromFile = Number (data);
//         appendFile(FILE_NAME, `\n${numberFromFile*2}`, 'utf8', error => {
//             if(error) {
//                 console.log('Impossibl to write such file!', error);
//             } else {
//                 console.log('File is saved');
//             }
//         })
//     }
// });






// writeFile('./data/hello.txt', 'HiFI', 'utf8', (error) => {
//   if (error) {
//     console.log('Oh no!', error);
//   } else {
//     console.log('File is saved');
//   }
// });