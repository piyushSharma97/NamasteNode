const fs = require('node:fs');
const a = 100;

setImmediate(() => console.log('immediate'));

Promise.resolve().then(() => console.log('promise')); // ✅ Corrected

fs.readFile('./file.txt', 'utf8', () => {
    console.log('file read done');
});

setTimeout(() => console.log('timeout'), 0);

process.nextTick(() => console.log('next tick'));

function printA() {
    console.log("A", a);
}
printA();

console.log('last line');
