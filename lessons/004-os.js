const os = require('os');
const cluster = require('cluster');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.cpus().length);

const cpus = os.cpus();

if (cluster.isMaster) {
  for (let i = 0; i < cpus.length - 2; i += 1) {
    // const CPUcore = cpus[i];
    // console.log('Запустить ещё один процесс');
    cluster.fork();
  }
  cluster.on('exit', worker => {
    console.log(`Worker with pid=${worker.process.pid} EXIT`);
    cluster.fork();
  });
} else {
  console.log(`Worker with pid=${process.pid} started`);
  setInterval(() => {
    console.log(`Воркер с pid=${process.pid} ещё работает`);
  }, 10000);
}

/*
Масштабирование NodeJS App

  Балансировка
  Кластеризация
  Докер контейнеры
*/
