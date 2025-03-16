const http = require('node:http');
const fs = require('node:fs');
const crypto = require('crypto')
let a= 1078698
let b=20986;
console.log('hello')
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log('first key generated')

setTimeout(()=>{
    console.log('call me asap');
},0)


setTimeout(()=>{
    console.log('call me after 3 sec');
},3000)

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('second key is generated')
})

function multiplyFn(x,y){
    const resullt = x*y;
    return resullt;
}

const c = multiplyFn(a,b);

console.log(c);
