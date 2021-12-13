console.log('=== PATH ===');
const path = require('path');

// console.log(path);

///------------ path.join(...)
console.log(path.join(__dirname, 'one', 'two', 'three')); // I:\dev\ulbi\lessons\one\two\three
console.log(path.join(__dirname, '..')); // I:\dev\ulbi-tv
console.log(path.join(__filename, 'one', 'two', 'three')); // I:\dev\ulbi-tv\lessons\002-path.js

///------------ path.resolve(...)
console.log(path.resolve('one', 'two')); // // I:\dev\ulbi\lessons\one\two (всегда абсолютный путь)
// лучше использовать path.join(...)

///------------ path.parse(...)
const absFullPath = path.join(__dirname, 'one', 'two', 'three.js');
console.log(path.parse(absFullPath));
/*
{
  root: 'I:\\',
  dir: 'I:\\dev\\ulbi-tv\\005-NodeJS-fundamentals-Nov-2021\\lessons\\one\\two',
  base: 'three.js',
  ext: '.js',
  name: 'three'
}
*/

console.log('OS Separator => ', path.sep); // \ or /
console.log('isAbsPath ? => ', path.isAbsolute(absFullPath)); // bool
console.log(path.basename(absFullPath)); // three.js
console.log(path.extname(absFullPath)); // .js

// ------------------------------------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);
console.log(url);
/*
URL {
  href: 'http://localhost:8080/users?id=5123',
  origin: 'http://localhost:8080',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:8080',
  hostname: 'localhost',
  port: '8080',
  pathname: '/users',
  search: '?id=5123',
  searchParams: URLSearchParams { 'id' => '5123' },
  hash: ''
}
*/
