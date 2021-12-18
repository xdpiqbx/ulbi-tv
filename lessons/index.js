// require('./001-process');
// require('./002-path');
// require('./003-file-sys');
// require('./004-os');
// require('./005-events');
// require('./006-streams');

const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  // response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
  response.writeHead(200, {
    'Content-type': 'application/json; charset=utf-8'
  });
  // response.end('<h1>Server Working !!! Работает =)<h1>');
  if (request.url === '/users') {
    response.end(JSON.stringify([{ id: 1, name: 'Ulbi TV' }]));
  }
  if (request.url === '/posts') {
    response.end('POSTS');
  }
  // response.end(request.url);
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
