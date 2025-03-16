const crypto = require('crypto')

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('1 key is generated')
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('2 key is generated')
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('3 key is generated')
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('4 key is generated')
})
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('5 key is generated')
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log('6 key is generated')
})
