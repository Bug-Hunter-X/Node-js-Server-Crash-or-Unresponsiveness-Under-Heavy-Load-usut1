const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//Simulate a large number of requests to trigger the bug
const numRequests = 10000;
for(let i = 0; i < numRequests; i++){
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/',
        method: 'GET'
    };

    const req = http.request(options, res => {
        res.on('data', d => {
            //process.stdout.write(d);
        });
    });
    req.on('error', error => {
        console.error(error);
    });
    req.end();
}
