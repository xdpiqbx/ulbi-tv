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
const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), {
  encoding: 'utf-8'
});
stream.on('data', chunk => {
  console.log(chunk);
});
stream.on('end', () => {
  console.log('Закончил чтение');
});
stream.on('error', e => console.log(e));

// stream.on('close');
// stream.on('data');
// stream.on('end');
// stream.on('error');
// stream.on('open');
// stream.on('pause');
// stream.on('readable');
// stream.on('ready');
// stream.on('resume');
