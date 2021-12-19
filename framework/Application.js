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

  _createServer() {
    return http.createServer((request, response) => {
      const emitted = this.emitter.emit(
        this._getRouteMask(request.url, request.method),
        request,
        response
      );
      if (!emitted) {
        response.end('YOU SEND REQUEST TO BLACK HOLE');
      }
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
};
