const {watch} = require('chokidar');  // allows obserwing changes

watch ('.', {
    usePolling: true,  //to watch untypical changes
    awaitWriteFinish: true, //got get info about change after full change is done
    ignoreInitial: true, //to ignore info about files at the start of program
})//  './**/'  recursive  
    // .on('all', (event, path) => {
    //     console.log(event, path);
    // });

//watch is very cpu consuming, it is not wise to watch full disc 
    // .add('all', (event, path) => {
    //     console.log(`File ${path} has been added`);
    // });
    .on('change', path => console.log(`File ${path} has been changed`))
    .on('unlink', path => console.log(`File ${path} has been removed`))
    .on('addDir', path => console.log(`Direcory ${path} has been added`))
    .on('remove', path => console.log(`File ${path} has been removed`));


    
