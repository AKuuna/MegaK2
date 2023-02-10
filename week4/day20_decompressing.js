//using zlib

// zlib.gunzip(buffer) - for buffers
//zlib.createGunzip() - for streams

const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require ('stream').promises;
const {createGunzip} = require ('zlib');

(async () => {

    await pipeline(  //order is very important in pipeline!
        createReadStream('image3.png'),
        createGunzip(), //compressing, doesnt really work on png - good text data - HTML, JSON, JS, CSS
        createWriteStream('image4.png'),
    );

    console.log('Done!');

})();