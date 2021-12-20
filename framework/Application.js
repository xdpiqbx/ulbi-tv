const http = require('http');
const EventEmitter = require('events');

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

module.exports = class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
    this.middlewares = [];
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach(path => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach(method => {
        const handler = endpoint[method];
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    });
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  _createServer() {
    return http.createServer((request, response) => {
      let body = '';
      request.on('data', chunk => {
        console.log(chunk);
        body += chunk;
      });
      request.on('end', () => {
        if (body) {
          request.body = JSON.parse(body);
        }
        this.middlewares.forEach(mwr => mwr(request, response));
        const emitted = this.emitter.emit(
          this._getRouteMask(request.pathname, request.method),
          request,
          response
        );
        if (!emitted) {
          response.end('YOU SEND REQUEST TO BLACK HOLE');
        }
      });
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
};
