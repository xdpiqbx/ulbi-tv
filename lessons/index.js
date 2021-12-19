const http = require('http');
const EventEmitter = require('events');

const PORT = process.env.PORT || 5000;
const emitter = new EventEmitter();

class Router {
  constructor() {
    this.endpoints = {};
  }

  request(method = 'GET', path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }
    const endpoint = this.endpoints[path];
    if (endpoint[method]) {
      throw new Error(`[${method}] по адресу ${path} уже существует`);
    }
    endpoint[method] = handler;
    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      handler(req, res);
    });
  }

  get(path, handler) {
    this.request('GET', path, handler);
  }
  post(path, handler) {
    this.request('POST', path, handler);
  }
  put(path, handler) {
    this.request('PUT', path, handler);
  }
  delete(path, handler) {
    this.request('DELETE', path, handler);
  }
}

/*
endpoints = {
  '/users' :{
  'GET': handler_1,
  'POST': handler_2,
  'DELETE': handler_3
  }
}
//**********************
emitter.on(`[${path}]:[${method}]`);
  [path]:[method]
  [/user]:[get]
  [/comment]:[post]
*/

const router = new Router();

router.get('/users', (req, res) => {
  res.end('YOU SEND REQUEST TO /USERS');
});

router.get('/posts', (req, res) => {
  res.end('YOU SEND REQUEST TO /POSTS');
});

const server = http.createServer((request, response) => {
  const emitted = emitter.emit(
    `[${request.url}]:[${request.method}]`,
    request,
    response
  );
  if (!emitted) {
    response.end('YOU SEND REQUEST TO BLACK HOLE');
  }
  // response.end(request.url);
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// **************************************************************************
// require('./001-process');
// require('./002-path');
// require('./003-file-sys');
// require('./004-os');
// require('./005-events');
// require('./006-streams');

// const http = require('http');

// const PORT = process.env.PORT || 5000;

// const server = http.createServer((request, response) => {
//   // response.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
//   response.writeHead(200, {
//     'Content-type': 'application/json; charset=utf-8'
//   });
//   // response.end('<h1>Server Working !!! Работает =)<h1>');
//   if (request.url === '/users') {
//     response.end(JSON.stringify([{ id: 1, name: 'Ulbi TV' }]));
//   }
//   if (request.url === '/posts') {
//     response.end('POSTS');
//   }
//   // response.end(request.url);
// });

// server.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });

// **************************************************************************
