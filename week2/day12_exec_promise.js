//exec Promisified
const {promisify} = require('util');
const exec = promisify(require('child_process').exec);
// //the same as:
// const {exec} = require('child_process');
// const execPromisified = promisify(exec);


(async() => {
    try{
        const {stdout} = await exec ('ping 8.8.8.8'); //destructure
        console.log(stdout);    
    } catch(err) {
        console.error('On no! ', err.stdout);        
    }
})();

// exec('dir')
//     .then (({stdout, stderr})  => {
//         console.log(stdout);
//     });

