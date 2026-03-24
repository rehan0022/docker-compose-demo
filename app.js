const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
        <h1>Hello from Docker!</h1>
        <p>Hostname: ${os.hostname()}</p>
        <p>Time: ${new Date().toISOString()}</p>
    `);
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
