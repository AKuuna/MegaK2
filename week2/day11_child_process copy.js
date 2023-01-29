const {exec} =require ('child_process');


// const cp = exec('dir', {
//     // env:{
//     //     PATH:'',  //zmienne srodowiskowe
//     // },
//     timeout: 1000, //1sek
// }); 

// const cp = exec('ping 8.8.8.8'); //cp to child process

// const cp = exec('npm init -y'); //cp to child process

exec('dir', (error, stdout, stderr) => {
    if (error) {
        console.error('Ups, that is ', error);
    } else if (stderr) {
        console.error ('Error in app!', stderr);
    } else {
        console.log('Program has finished!', stdout);
    }
});

// //other way:
// cp.stdout.on('data',() => {
//     console.log('Data..');
// });

// cp.stderr.on('data', data => {
//     console.log('Out>', data);
// });

// cp.on('close', () => {
//     console.log('Finished');
// });


// setTimeout( () => {
//     cp.kill('SIGKILL'); //sigkill - process will worok also in unix based systems
// }, 1000);

/**
 * unix - strumienie:
 * stdout- standardowe wyjście
 * stdin - wejście programu
 * stderr - wyjście z programu dla blędów
 */