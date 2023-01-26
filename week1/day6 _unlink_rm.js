const {unlink, rm} = require('fs').promises;

// //UNLINK
// (async() => {

//     const oldFile = process.argv[2];
//     const newFile = process.argv[3];

//     try {

//         await unlink (oldFile);

//     } catch(e) {
        
//         if (e.code === 'ENOENT') {

//             console.log(`${oldFile} file doesn't exist!`);

//         } else {

//             console.log('Urgh, ', e);
//         }
//     }
// }) ();

//RM , exists from node 14
(async() => {

    const oldFile = process.argv[2];
    const newFile = process.argv[3];

    try {

        await rm (oldFile, {
            recursive: true, //delete all the interior catalogues
        });

    } catch(e) {
        
        if (e.code === 'ENOENT') {

            console.log(`${oldFile} file doesn't exist!`);

        } else {

            console.log('Urgh, ', e);
        }
    }
}) ();