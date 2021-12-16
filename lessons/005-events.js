const Emitter = require('events');

const emitter = new Emitter();

// document.addEventListener('');

emitter.on('message', (data, second, third) => {
  console.log('Message 1 - DATA ' + data);
  console.log('Message 2 - SECOND ' + second);
});

//emitter.once(...) - событие отработает 1 раз

const MESSAGE = process.env.message || '';

if (MESSAGE) {
  emitter.emit('message', MESSAGE, 12345);
} else {
  emitter.emit('message', 'EMPTY MESSAGE');
}

/*
  emitter.removeAllListeners()
  emitter.removeListener('message', callback) - принимает название события и тот коллбек который на него подписал
*/

// Когда использовать ?
// http
// websockets
// long pulling
// clusters
