var EventEmitter = require('events');

var em = new EventEmitter();

function teacher(num){
    console.log('老师进教室');
}

function student(num){
    console.log('学生进教室');
}

em.setMaxListeners(100);

console.log(em.listeners('bell'));

em.addListener('bell',teacher);

em.once('bell',student);

em.removeListener('bell',student);

em.removeAllListeners();

console.log(em.listeners('bell'));

em.emit('bell',1);

em.emit('bell',2);

