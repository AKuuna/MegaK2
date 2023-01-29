const {exec} =require ('child_process');

exec('node test11.js', (error, stdout, stderr) => {
    // if (error) {
    //     console.error('Ups, that is ', error);
    // } else {
    //     console.error ('Error in app!', stderr);
    //     console.log('Program has finished!', stdout);
    // }
    console.log({error, stderr, stdout});
});

