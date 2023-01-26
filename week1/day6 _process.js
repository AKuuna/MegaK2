//PROCESS

// console.log(process);

// console.log(global.process);

console.log(process.argv); // .\day6.js 4 + 7  // we can add this way arguments to table
console.log(process.argv[2]);
console.log(process.argv[3]);
console.log(process.argv[4]);
const a = Number(process.argv[2]);
const b = Number(process.argv[4]);

const sign = process.argv[3];

if (sign === '*') {
    console.log(a * b);
}

if ( sign === '+') {
    console.log(a + b);
}
