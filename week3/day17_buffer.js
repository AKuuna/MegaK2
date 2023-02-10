//console.log(Buffer);

// Buffer is not created by new Buffer() - it has to have steady width. It is normally called by allocation 

const buff = Buffer.alloc(20);

buff.write('Hello, World', 'utf-8');

console.log(buff); //16 data
console.log(buff.toString('utf-8')); //text
console.log(buff.toString('hex')); //binary


console.log(Buffer.byteLength('ą', 'utf-8')); //shows length needed for symbol


const buff2 = Buffer.from('Zażółć gęślą jaźń! 😁🙌');
console.log(buff2);
console.log(buff2.length); //36 bytes are needed to write such text
console.log(buff2.toString('utf-8'));


const buff3 = Buffer.from([1,2,3,4]);
console.log(buff3);
console.log(buff3.length);
console.log(buff3.toString('utf-8'));

//Buffer can be cleaned, filled, copied, compard, read
