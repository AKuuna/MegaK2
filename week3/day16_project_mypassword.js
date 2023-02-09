/**
 * Get from command line password f.e. "node index.js mypassword"
 * check if "megakurs" is provided and only then get back info about logging in. Do it with using crypto.
 */

const{hash, compare} = require('bcrypt');


const personPassword = String(process.argv[2]);
const expectedPass = "megakurs";


hash(personPassword, 10, (error, hash) => {
    if (error) {
        console.log(error);
    } else {
        //console.log(hash);
        compare( expectedPass, hash, (error, res) => {
            if (res) {
                console.log("Logged in!");
            } else {
                console.log("Try again");
            }
        });
    }
});



