const fs = require('fs');
const path = require('path');
require('dotenv').config();

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

// своя функция на промисах
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, err => {
      if (err) {
        reject(err.message);
      }
      resolve(path);
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, err => {
      if (err) {
        reject(err.message);
      }
      resolve(path);
    })
  );
};

const readFileAsync = async path => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    })
  );
};

const removeFileAsync = async path => {
  return new Promise((resolve, reject) =>
    fs.rm(path, err => {
      if (err) {
        reject(err.message);
      }
      resolve();
    })
  );
};

// USING --------------------------------------------------------

// writeFileAsync(path.resolve(__dirname, 'test.txt'), '123')
//   .then(path => appendFileAsync(path, '456'))
//   .then(path => appendFileAsync(path, '789'))
//   .then(path => readFileAsync(path, 'test.txt'))
//   .then(data => console.log('data', data))
//   .catch(err => console.log(err));

// removeFileAsync(path.resolve(__dirname, 'test.txt')).then(() =>
//   console.log('file was removed')
// );

// --------------------------------------------------- Home Work

// const text = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//   .then(path => readFileAsync(path))
//   .then(data => data.split(' ').length)
//   .then(count =>
//     writeFileAsync(
//       path.resolve(__dirname, 'count.txt'),
//       `Количество слов - ${count}`
//     )
//   )
//   .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')));
