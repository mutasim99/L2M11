// import http, { IncomingMessage, Server, ServerResponse } from 'http'
// const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
//     console.log('server is running.....');

//     if (req.url === '/' && req.method === 'GET') {
//         res.writeHead(200, { 'content-type': 'application/json' });
//         res.end(
//             JSON.stringify({
//                 message: 'hi i am create a sever using raw node js',
//                 path: req.url
//             })
//         )
//     };
// });

// server.listen(5000, () => {
//     console.log(`My server is running on port:${5000}`);

// });



import http, { IncomingMessage, Server, ServerResponse } from 'http';
import config from './config';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('My server is running');

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'content-type': 'application/json' }),
            res.end(
                JSON.stringify({
                    message: 'hi i am mutasim i am create a server using raw node.js',
                    path: '/'
                })
            )
    }

});

server.listen(config.port, () => {
    console.log(`My server is running on port:${config.port}`);

});