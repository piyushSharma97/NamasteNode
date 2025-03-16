const https = require('node:https');
const fs = require('node:fs');

let a= 1078698
let b=20986;
console.log('hello')

fs.readFileSync('./file.txt',"utf-8");
console.log("this will be execute only after file read");


https.get('https://dummyjson.com/products/1',(res)=>{
    console.log('fetched data successfully');   
})



setTimeout(()=>{
    console.log('call me after 3 sec');
},3000)


fs.readFile('./file.txt','utf-8',(err,data)=>{
    console.log('file data',);
    
})
function multiplyFn(x,y){
    const resullt = x*y;
    return resullt;
}

const c = multiplyFn(a,b);

console.log(c);
