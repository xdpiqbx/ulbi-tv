const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.resolve(__dirname, 'dir')); // создать папку (если существует будет ошибка)
// fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), { recursive: true }); // вложет папки одна в одну

// Асинхронное создание папок
// fs.mkdir(path.resolve(__dirname, 'dir1'), err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Папка создана');
// });

// Асинхронное удаление папок
// fs.rmdir(path.resolve(__dirname, 'dir1'), err => {
//   if (err) {
//     throw err;
//   }
//   console.log('Папка Удалена');
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '123', err => {
//   if (err) {
//     throw err;
//   }
//   console.log('Данные записаны');
// });

fs.appendFile(path.resolve(__dirname, 'test.txt'), '4321', err => {
  if (err) {
    throw err;
  }
  console.log('Данные записаны');
});
// можно работать через промисы
// fs.promises.appendFile().then()
