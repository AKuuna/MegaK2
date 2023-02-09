const {watch} = require('chokidar');  // allows obserwing changes
const {readFile} = require ('fs').promises;

const pathToObserve = `${process.argv[2]}/**/*.js`;

const readChangedFile = async(path, text) => {
    try {
    const data = await readFile(path, 'utf8');
    console.log(`${text} \n It's content is: ${data}`);
    } catch (err) {
        if (err.code === 'ENOENT')
        {
            console.log('File is not valid!', err);
        } else {
        console.log('On no!', err);
    }}
};


watch (pathToObserve, {
    awaitWriteFinish: true,
})
    .on('change', (path) => { readChangedFile(path, `File ${path} has been changed`)})
    .on('add', (path) => { readChangedFile(path, `File ${path} has been added`)})
    

    
