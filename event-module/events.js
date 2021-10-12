const { EventEmitter } = require('events');
const ev = new EventEmitter();

/* 
ev.on('saySomething', message => {
  console.log('Eu te ouvi: ', message);
}); //ouvir o evento
*/
ev.once('saySomething', message => {
  console.log('Eu te ouvi: ', message);
}); //ouvir o evento uma única vez e os demais ele ignora

ev.emit('saySomething', 'Camila');
ev.emit('saySomething', 'Felipe');
ev.emit('saySomething', 'Fred');
