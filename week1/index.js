//READDIR, FILESTAT, ACCESS
const { readdir, readFile, stat, access } = require('fs').promises;
const {W_OK} = require('fs').constants; // mode: R_OK is access possible to read, W_OK is possible to write

//fs.exists is deprecated, no sense to use, instead use fs.access
const FILE_NAME = './data/hello-world.txt';

//CHECKING IF THE FILE EXISTS, BEST WAAY
(async() => {
    try {
        const result = await readFile (FILE_NAME, 'utf8');
        console.log(result);
    } catch (error) {

        //console.log(error.code);   //ENOENT - dla odczytu  //EEXIST -dla zapisu
        if (error.code === 'ENOENT') {
            console.log('FIle is not valid!');
        } else {
            console.log('Unknown error!', error);
        }
    }
     
})();


//NOT WANTED WAY OF CHECKING EXISTANCE OF FILE:
(async() => {
    try {
     await access(FILE_NAME, W_OK);
    } catch {
        console.log('File is not valid!');
    }
})();


// (asyc() => {

// })();
//written otherwise:

async function readFilesAndDirectories() {

    const fileNames = await readdir('.');
    // const fileNames = await readdir('./data');

    for (const fileName of fileNames) {
        console.log(fileName);
    
    // const fileContent = await readFile(`./data/${fileName}`, 'utf8');
    // console.log(fileContent);

    const fileStatus = await stat(`./${fileName}`);
    console.log(fileStatus.isFile());


    // const fileStatus = await stat(`./data/${fileName}`, 'utf8');
    // console.log(fileStatus);

    }
}

async function readFilesAndDirectories2() {

    const fileNames = await readdir('./data');

    for (const fileName of fileNames) {
        console.log(fileName);
    
    const fileContent = await readFile(`./data/${fileName}`, 'utf8');
    console.log(fileContent);

    const fileStatus = await stat(`./data/${fileName}`, 'utf8');
    console.log(fileStatus);

    }
}

readFilesAndDirectories();
readFilesAndDirectories2();