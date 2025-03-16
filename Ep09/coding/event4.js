const fs = require('node:fs');
console.log('start')

setImmediate(() => console.log('immediate'));

Promise.resolve().then(() => console.log('promise')); 
fs.readFile('./file.txt', 'utf8', () => {
    process.nextTick(() => console.log('2 nd next tick'));
    setTimeout(() => console.log('2nd timeout'), 0);
    setImmediate(() => console.log('2nd immediate'));
    Promise.resolve().then(() => console.log('2nd promise')); 
    console.log('file read done');
});

setTimeout(() => console.log('timeout'), 0);

process.nextTick(() => console.log('next tick'));

console.log('last line');
