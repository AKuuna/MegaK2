const { readFile, writeFile} = require('fs').promises
const {encryptText, hash} = require ('./cipher');
const {ENCRYPTION_SALT, HASH_SALT} = require('./constans');

const [,,fileName, pwd] = process.argv; //taking two arguments



(async () => {

    const content = await readFile(fileName,'utf8'); 
    const contentHash = hash(content, HASH_SALT);
    //console.log(contentHash);
    const encrypted = await encryptText(content, pwd, ENCRYPTION_SALT); //we need to use diferent salts
    encrypted.hash = contentHash; //added hash to the file
    await writeFile(fileName, JSON.stringify(encrypted), 'utf8'); //changing file to JSON
    console.log('File is overwritten!');
}) ();

