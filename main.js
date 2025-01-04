const http = require('node:http');
const path = require('node:path')

// Create a local server to receive data from
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
    const pathToHelpers = path.join(__dirname,'helpers', 'helpers.js')
    console.log(pathToHelpers);
    console.log(path.basename(pathToHelpers));
    console.log(path.dirname(pathToHelpers));
    console.log(path.parse(pathToHelpers));
    console.log(path.normalize('C:\\\\Users\\\\sydor\\\\OneDrive\\\\Desktop\\\\Okten\\\\node-lessons\\\\helpers'));
    console.log(path.isAbsolute('./helpers/helpers.js'));

}

void foo()



