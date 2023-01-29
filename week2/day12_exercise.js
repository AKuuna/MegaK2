const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

const choice = process.argv[2];

(async() => {
    try{
        if (choice === 'Calculator') {
            await exec ('calc.exe');
        } else if (choice === 'Paint'){
            await exec ('mspaint.exe');
        } else {
            console.log ('Nothing happens, you can only start Calculator or Paint with this program');
        }
  
    } catch(err) {
        console.error('On no! ', err.stdout);        
    }
})();