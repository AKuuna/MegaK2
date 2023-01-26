const {rename} = require('fs').promises;


(async() => {

    const oldFile = process.argv[2];
    const newFile = process.argv[3];

    try {

        await rename (oldFile, newFile);

    } catch(e) {
        
        if (e.code === 'ENOENT') {

            console.log(`${oldFile} file doesn't exist!`);

        } else {

            console.log('Urgh, ', e);
        }
    }
}) ();