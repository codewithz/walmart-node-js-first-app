const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello Walmart');
        response.end();
    }

    if (request.url === '/api/categories') {
        response.write(JSON.stringify(['Clothings', 'Electronics', 'Cycling', 'Child Care Products']));
        response.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');