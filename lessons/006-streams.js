// Stream != Thread
// Thread - поток выполнения

// Stream
// Readable
// Writable
// Duplex - для чтения и записи Readable + Writable
// Trfnsform - такой же как Duplex но может изменить данные по мере чтения

// Stream отправляет ресурс частями (по умолчаниию часть = 64kb)

const fs = require('fs');
const path = require('path');

// --------- Так стандартно читаю фыйл
// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// --------- Так читаю фыйл частями через стрим
// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {
//   encoding: 'utf-8'
// });
// stream.on('data', chunk => {
//   console.log(chunk);
// });
// stream.on('end', () => {
//   console.log('Закончил чтение');
// });
// stream.on('error', e => console.log(e));

// stream.on('close');
// stream.on('data');
// stream.on('end');
// stream.on('error');
// stream.on('open');
// stream.on('pause');
// stream.on('readable');
// stream.on('ready');
// stream.on('resume');

// const writeableStream = fs.createWriteStream(
//   path.resolve(__dirname, 'test2.txt')
// );

// for (let i = 0; i < 20; i++) {
//   writeableStream.write(i + '\n');
// }

// // Это тоже собития и на них можно подпсатся
// writeableStream.end();
// writeableStream.close();
// writeableStream.destroy();

const http = require('http');

http.createServer((request, response) => {
  // request - readable stream
  // response - writable stream
  const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

  // Так стрим закончит читать быстрее чем пользователь скачает
  stream.on('data', chunk => response.write(chunk));
  stream.on('end', () => response.end());

  // для синхронизации есть метод .pipe(response) котороый принимает writable stream
  // readable stream - не начинает читать новые данные пока writable stream не закончил записыватьт предидущую
  stream.pipe(response);
});
