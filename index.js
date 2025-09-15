const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from CI/CD Pipeline! Updated version mbu....welcome to devops expert talk-16092025');

});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
