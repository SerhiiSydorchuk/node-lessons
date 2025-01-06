const http = require('node:http');
const path = require('node:path');
// const readline = require('node:readline'); // with callback
const readline = require('node:readline/promises');
const fs = require('node:fs/promises');
const os = require('node:os')
const emitter = require('node:events')

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
    // await fs.writeFile('text.txt','Hello World')
    //  await fs.writeFile('text.json', JSON.stringify([{name: 'serhii', age:31},{name: 'serhii', age:31},{name: 'serhii', age:31}],null,2));
    // const data = await fs.readFile(path.join(process.cwd(), 'text.txt'), 'utf-8');
    // const dataJson = await fs.readFile(path.join(process.cwd(), 'text.json'), 'utf-8');
    // console.log(JSON.parse(dataJson));
    // console.log(data);
    // await fs.appendFile(path.join(process.cwd(),'text.txt'),'\nHello Our World ')
    // await fs.appendFile(path.join(process.cwd(),'text.txt'),'\nHello Our World ')
    // await fs.appendFile(path.join(process.cwd(),'text.txt'),'\nHello Our World ')
    // await fs.appendFile(path.join(process.cwd(),'text.txt'),'\nHello Our World ')
    // await fs.rename( 'text.json', path.join(process.cwd(),'helpers','text2.json'));
    // await fs.copyFile('text.txt', 'text2.txt');
    // await fs.rename(path.join(process.cwd(),'text2.txt'), path.join(process.cwd(),'qwe','asd','text.txt'))
    // await fs.mkdir(path.join(process.cwd(), 'qwe', 'asd', 'zxc'), {recursive:true});
    // await fs.rmdir(path.join(process.cwd(), 'qwe', 'asd', 'zxc'));
    // await fs.rm(path.join(process.cwd(), 'qwe'), {recursive: true, force: true});
    // await fs.unlink('text2.txt');
    // const stat = await fs.stat(path.join(process.cwd(), 'text.txt'));
    // console.log(stat.isFile());
    // const dirs = ['qwe','asd','zxc','rty','fgh']
    // for (const dir of dirs) {
    //     await fs.mkdir(path.join(process.cwd(), 'fgh', dir));
    // }

    //os
    // console.log(os.arch());
    // console.log(os.cpus());
    // console.log(os.totalmem() / 1024 / 1024 / 1024);
    // console.log(os.freemem() / 1024 / 1024 / 1024);
    // console.log(os.hostname());
    // console.log(os.platform());
    // console.log(os.release());
    // console.log(os.uptime());

    //events
   //  const em = new emitter.EventEmitter();
   //  // можна викликати декілька раз
   //  em.on('first_visit', (name, age) => {
   //      console.log(`email to ${name} ${age}`); //send mail
   //  });
   //  em.on('first_visit', () => {
   //      console.log('sms') //send sms
   //  });
   //  em.emit('first_visit', "Serhii", 31);
   //  em.emit('first_visit', "Serhii", 25);
   //  em.emit('first_visit', "Serhii", 21);
   //  em.emit('first_visit', "Serhii", 30);
   //  // можна викликати тільки один раз
   // em.once('second_visit', ()=>{
   //     console.log('second_visit')
   // })
   //  em.emit('second_visit');
}
void foo()

//Створити папку "baseFolder". В ній створити 5 папок, в кожній з яких створити по 5 файлів з розширенням txt.
// Вивести в консоль шляхи до кожного файлу чи папки, також вивести поряд інформацію про те, чи є це файл чи папка.
const creatDir =  async () =>{
    const dirs = ['dir1', 'dir2', 'dir3', 'dir4', 'dir5'];
    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
    for (const dir of dirs) {
        await fs.mkdir(path.join(process.cwd(), 'baseFolder', dir),{recursive:true});
        const stat =   await fs.stat(path.join(process.cwd(), 'baseFolder', dir))
        console.log(stat.isDirectory())
        console.log(path.join(process.cwd(), 'baseFolder', dir))
        for (const file of files) {
            await fs.writeFile(path.join(process.cwd(),'baseFolder',dir, file), 'Hello World')
            const stat =   await fs.stat(path.join(process.cwd(),'baseFolder',dir, file))
            console.log(stat.isDirectory())
            console.log(path.join(process.cwd(),'baseFolder',dir, file))
        }
    }
}
void creatDir()






