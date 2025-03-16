const fs = require('node:fs');
console.log('start')

setImmediate(() => console.log('immediate'));
Promise.resolve().then(() => console.log('promise')); 
fs.readFile('./file.txt', 'utf8', () => {
    console.log('file read done');
});

setTimeout(() => console.log('timeout'), 0);

process.nextTick(() => {
    process.nextTick(() => console.log('2nd next tick'));
    setTimeout(() => console.log('2nd timeout'), 0);
    setImmediate(() => console.log('2nd immediate'));
    console.log('next tick')
});
console.log('last line');
