/* 2 .Program which will show the inside of all files in catalogue PROJECTS 
    +Use option to list files in folder. Then use loop to show them.
    +the use stat and .isDirectory() to go recursively to other cataloguesand 
*/

const {readdir, stat, readFile } = require ('fs').promises;

const PATH = './projects/';

async function showFilesInDirectory(PATH) {
    try {
    const fileList = await readdir(PATH);
    // console.log(fileList);

    for (let element of fileList) {
        const elementPath = `${PATH}/${element}`;
        const elementsStats = await stat(elementPath);
        //console.log('Data shared in:', elementPath, elementsStats.isDirectory());
        
        if(elementsStats.isFile()){
            const elementInsides = await readFile(elementPath, 'utf8');
            console.log('File content: ', elementPath, elementInsides);


        } else if(elementsStats.isDirectory()){
            await showFilesInDirectory(elementPath);
        }
    }
    } catch (err) {
        console.log('Something went wrong', err);
}
}

showFilesInDirectory(PATH);