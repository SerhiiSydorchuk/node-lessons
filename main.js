const http = require('node:http');
// const readline = require("readline")

// const Helper = require('./helpers/helpers.js');
// console.log('main JS');
// console.log(__dirname);
// console.log(__filename);
// Helper.foo()


// Використання readline

// const foo = async () => {
//     const rlInter = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//             })
//     rlInter.question('What is your name?', (name)=>{
//         console.log(`Hello ${name}`);
//         rlInter.close();
//     })
//
// }
//
// void foo ()

// Create a local server to receive data from
const foo = async ()=>{
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const url = req.url;
    if (url=== "/about"){
        res.end(JSON.stringify({
            data: "About Page"
        }))
    }
    if (url=== "/main"){
        res.end(JSON.stringify({
            data: "Main Page"
        }))
    }
    if(url === '/'){
        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    }

});

server.listen(8001);}
void foo()



