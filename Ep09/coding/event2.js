const fs = require('node:fs');
const a =122;
setImmediate(()=>console.log('immediate'));

fs.readFile('./file.txt','utf8',()=>{
    console.log('file read done');
    
});
setTimeout(()=>console.log('timeout'),0);
function printA(){
    console.log("A",a);
}
printA();

console.log('last line')