//4 types of streams - readable stream, duplex stream (TCP/IP), transform stream, writeable stream

const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require ('stream').promises;


(async () => {
    const openFileStream = createReadStream('image1.png'); //reading 
    
    //console.log(openFileStream);
    
    const writeFileStream = createWriteStream('image2.png'); //writing

    await pipeline( //merging them together
        openFileStream,
        writeFileStream,
    );

    console.log('Done!');

})();


// //FASTER
// (async () => {

//     await pipeline( //merging them together
//         createReadStream('image1.png'),
//         createWriteStream('image2.png'),
//     );

//     console.log('Done!');

// })();


// //OLDER WAY -I

// const {createReadStream, createWriteStream} = require('fs');

// const r = createReadStream('image1.png');
// const w =  createWriteStream('image2.png');

// r.pipe(w);

// r.on('end', () => console.log('Ready!'));

// //OLDER WAY -II

// const {createReadStream, createWriteStream} = require('fs');

// const r = createReadStream('image1.png');
// const w =  createWriteStream('image2.png');

// r.on('data', data => w.write(data));

// r.on('end', () => {
//     w.close();
//     console.log('Ready!');
// });