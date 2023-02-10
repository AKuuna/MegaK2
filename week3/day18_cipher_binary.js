
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv, createDecipheriv, createHmac} = require('crypto');

async function encryptBinary(binary, password, salt) {
//First, we'll generate the key. The key length is dependent on the algorithm.
//In this case for aes192, it is 24 bytes (192 bits).
  const algorithm = 'aes-192-cbc';
  const key = await scrypt(password, salt, 24);
  const iv = await randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(binary, 'binary', 'hex'); //hex is okay for binary
  encrypted += cipher.final('hex');
  return {
    encrypted,
    iv: iv.toString('hex'),
  };
}


async function decryptBinary(text, password, salt, ivHex) {
  //First, we'll generate the key. The key length is dependent on the algorithm.
  //In this case for aes192, it is 24 bytes (192 bits).
  const algorithm = 'aes-192-cbc';
  const key = await scrypt(password, salt, 24);
  const iv = Buffer.from(ivHex, 'hex'); //Initialization vector.

  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, 'hex', 'binary');
  decrypted += decipher.final('binary');
  return decrypted;
}

function hash(text, salt) {
  return createHmac('sha512', salt)
    .update(text)
    .digest('hex');

}


module.exports = {
  encryptBinary,  //while using it we dont put in readFile 'utf-8' and writeFile should be used for 'binary'
  decryptBinary,
  hash,
}