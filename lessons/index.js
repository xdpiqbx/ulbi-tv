const PORT = process.env.PORT || 5000;
const Application = require('../framework/Application');
const userRouter = require('./src/user-routes');
const jsonParser = require('../framework/parseJson');
const parseUrl = require('../framework/parseUrl');
const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter);

// ------- Переехал в Application
// const server = http.createServer((request, response) => {
//   const emitted = emitter.emit(
//     `[${request.url}]:[${request.method}]`,
//     request,
//     response
//   );
//   if (!emitted) {
//     response.end('YOU SEND REQUEST TO BLACK HOLE');
//   }
//   // response.end(request.url);
// });

app.listen(PORT, () => {
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
