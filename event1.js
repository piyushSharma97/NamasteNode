const fs = require("fs");
const https = require("https");

console.log("Start");

process.nextTick(() => console.log("process.nextTick"));

Promise.resolve().then(() => console.log("Promise.then"));

setTimeout(() => console.log("setTimeout"), 0);

fs.readFile('./file.txt', () => console.log("fs.readFile"));

https.get("https://jsonplaceholder.typicode.com/todos/1", () => 
    console.log("https.get")
);

console.log("End");