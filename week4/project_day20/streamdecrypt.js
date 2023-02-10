const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require ('stream').promises;
const{ createDecipher } = require ('crypto');  //these methods are getting out of use
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);

const [,,fileName1, fileName2, pwd] = process.argv[2];

const ENCRYPTION_SALT = '02cbo8nv5i3nm5c90omluvt  5409v5; o vo8ly34no8 lv8ie5 ylt3e 8tyli ec l3o4,;oy 438 ;35voy5 yt. .8yot 43o8 4ety.8drckhuderiky elitevrgr .ki8y t.yi8';

(async () => {

        const algorithm = 'aes-192-cbc';
        const key = await scrypt(pwd, ENCRYPTION_SALT, 24);

        await pipeline(  
            createReadStream(fileName1),
            createDecipher(algorithm, key), 
            createWriteStream(fileName2),
        );
    
        console.log('Done!');

    

})();