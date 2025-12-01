import http, { IncomingMessage, Server, ServerResponse } from 'http'
const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('server is running.....');

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(
            JSON.stringify({
                message: 'hi i am create a sever using raw node js',
                path: req.url
            })
        )
    };

    if (req.url === '/api/users' && req.method === 'POST') {
        let body = '';

        // collect data
        req.on('data', chunk=>{
            body += chunk.toString();
        });

        // when request is finished
        req.on('end', ()=>{
            const parsed = JSON.parse(body);

            res.writeHead(200, {'content-type': 'application/json'});
            res.end(
                JSON.stringify({
                    message:'post received',
                    receivedData : parsed
                })
            )
        })

    }else{
        res.writeHead(404)
        res.end('data is not found')
    }
});

server.listen(5000, () => {
    console.log(`My server is running on port:${5000}`);

});

