// const { dns } = require('dns');

// dns.lookup('https://www.google.com/', 'utf8', (error, data) => {});

//     if(error===null){
//         console.log(data);
//     } else {
//         console.log('Oh no !', error);
//     }
// });

// const { readfile } = require('fs'); // const {readfile} = require('fs').promises
// const { promisify } = require('util');

// //const readFilePromised = promisify(readfile);

// (async() => {
//     try{
//     const data = await promisify(readfile)('./index123.js', 'utf8');
// //const data = await readFilePromised('./index123.js', 'utf8');
//     console.log(data);
//     } catch(err) {
//         console.log('On no', err);
//     }
// })();

// sync version
// readfile('./index123.js', 'utf8')
//     .then(data => {
//     console.log(data);
// })
// .catch(error =>{
//     console.log('Oh no', error);
// });

// without promisify
// readfile('./index123.js', 'utf8', (error, data) => {
//     if(error===null){
//         console.log(data);
//     } else {
//         console.log('Oh no !', error);
//     }
// });

// console.log('Program has finished!');

// SIDE TASK WITH DNS


// const { readFile } = require('fs').promises;

// (async () => {
//   const data = await readFile('./index.js', {
//     encoding: 'utf8',
//   });
// })();
