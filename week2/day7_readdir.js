const {readdir} = require('fs').promises;

(async () => {

    const subDir = process.argv[2];
    const files = await readdir ('./' + subDir);

    console.log(files);

}) ();