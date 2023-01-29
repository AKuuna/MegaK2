//Safe use of parameters given

const ip = 'wp.pl && format C:'; //that could format our disc
const safeIp = ip.replace(/[^0-9.]+/g, '') //this says what is possible to use
/** everything that isn't 0-9 or . => delete */

console.log(safeIp);

//OTHER CODE FROM THIS DAY:
// const {promisify} = require('util');
// const exec = promisify(require('child_process').exec);

// // console.log(process.env.PATH);

// (async() => {
//     try{
//         const {stdout} = await exec (`node test12.js`, {
//             env: {
//                 NODE_ENV:'production',
//             },
//             timeout: 2000,
//         }); 
//         console.log(stdout); 
//     } catch(err) {
//         console.error('On no! ', err.stdout);        
//     }
// })();


// //!!!!!!
// (async() => {
//     try{
//         const ip = process.argv[2];
//         const {stdout} = await exec (`ping ${ip}`); //destructure, but this way anyone can add unwoanted par of parameter, f.e. create new folder, format disc!!!
//         console.log(stdout);    
//     } catch(err) {
//         console.error('On no! ', err.stdout);        
//     }
// })();
