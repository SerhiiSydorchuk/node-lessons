const http = require('node:http');
const path = require('node:path');
// const readline = require('node:readline'); // with callback
const readline = require('node:readline/promises');
const fs = require('node:fs/promises');

const foo = async ()=>{
    //http
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//
//     const url = req.url;
//     if (url=== "/about"){
//         res.end(JSON.stringify({
//             data: "About Page"
//         }))
//     }
//     if (url=== "/main"){
//         res.end(JSON.stringify({
//             data: "Main Page"
//         }))
//     }
//     if(url === '/'){
//         res.end(JSON.stringify({
//             data: 'Hello World!',
//         }));
//     }
//
// });
//
// server.listen(8001);

    //path
//     const pathToHelpers = path.join(__dirname,'helpers', 'helpers.js')
//     console.log(pathToHelpers);
//     console.log(path.basename(pathToHelpers));
//     console.log(path.dirname(pathToHelpers));
//     console.log(path.parse(pathToHelpers));
//     console.log(path.normalize('C:\\\\Users\\\\sydor\\\\OneDrive\\\\Desktop\\\\Okten\\\\node-lessons\\\\helpers'));
//     console.log(path.isAbsolute('./helpers/helpers.js'));

    //readline with callback
    //
    // const rlInter = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout,
    //         })
    // rlInter.question('What is your name?', (name)=>{
    //     console.log(`Hello ${name}`);
    //     rlInter.close();
    // })

    // readline with promises
    // const rlInter = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout,
    //         })
    // const name = await rlInter.question('What is your name?');
    // console.log(`Hello ${name}`);
    // const age = await rlInter.question('How old are you?')
    // console.log(`You are ${age} years old`)
    //  // rlInter.close();
    // process.exit(0);

    //file system
    await fs.writeFile('text.txt','Hello World')
    // await fs.writeFile('text.json', JSON.stringify([{name: 'serhii', age:31},{name: 'serhii', age:31},{name: 'serhii', age:31}],null,2));
    const data = await fs.readFile(path.join(process.cwd(), 'text.txt'), 'utf-8');
    // const dataJson = await fs.readFile(path.join(process.cwd(), 'text.json'), 'utf-8');
    // console.log(JSON.parse(dataJson));
    console.log(data);

    await fs.appendFile(path.join(process.cwd(),'text.txt'),'\nHello Our World ')
    await fs.appendFile(path.join(process.cwd(),'text.txt'),'\nHello Our World ')
    await fs.appendFile(path.join(process.cwd(),'text.txt'),'\nHello Our World ')
    await fs.appendFile(path.join(process.cwd(),'text.txt'),'\nHello Our World ')
    // await fs.rename('text.json', 'helpers/text2.json');
    console.log(path.join(process.cwd()))





}

void foo()



