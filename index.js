const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from CI/CD Pipeline-sathish sir is very strict about attendance');

});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
