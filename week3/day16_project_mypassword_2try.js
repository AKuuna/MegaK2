/**
 * Get from command line password f.e. "node index.js mypassword"
 * check if "megakurs" is provided and only then get back info about logging in. Do it with using crypto.
 */

const{pbkdf2} = require('crypto');

const SALT = 'fjwo85ci88pcsr 8439pcm9;3 292c2984c4 9rew903riwcw03439uo9_kli 9gd45b';
const personPassword = process.argv[2];

const RIGHT_PASSWORD = '26385a54491c9d90692ca4bc77411eb293cba50baca1643360c1e5de56f348b06cc2e325db626e640da001446eb45c715a8d3ed1d34017c4e23f7c96cf9c2b22'; //taken from console.log (hash)

pbkdf2(personPassword, SALT, 10000, 64, 'sha512', (err, hash) => {
    if (err) {
        console.log(err);
    } else {
        if (hash.toString('hex') === RIGHT_PASSWORD) {
            console.log('Logged in!');
        }
        //console.log(hash);
        //console.log(hash.toString('hex'));
    }
});
