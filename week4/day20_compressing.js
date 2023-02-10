//using zlib

// zlib.gzip(buffer) - for buffers
//zlib.createGzip() - for streams

const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require ('stream').promises;
const {createGzip} = require ('zlib');

(async () => {

    await pipeline(  //order is very important in pipeline!
        createReadStream('image1.png'),
        createGzip(), //compressing, doesnt really work on png - good text data - HTML, JSON, JS, CSS
        createWriteStream('image3.png'),
    );

    console.log('Done!');

})();