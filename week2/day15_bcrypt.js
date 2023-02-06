const{hash, compare} = require('bcrypt');

hash('text to hash', 10, (err, hash) => {  //rounds of making salt, 10 is safe
    if (err) {
        console.log(err);
    } else {
        console.log(hash);

        compare('text to hash',  hash, (err, res) => {  //comapares passwords without showing their insides
            if (res) {
                console.log('Logged in!'); 
            } else {
                console.log('Nope!');
            } 
        });
    }
}); //such method wiil everytime dreate different string of characters
