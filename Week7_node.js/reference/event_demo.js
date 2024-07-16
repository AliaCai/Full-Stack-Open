//bring in event emitter
const EventEmitter = require('events');

//Create emitter class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', ()=> console.log('Event Fired'));//every run you emit, the thing in '' eg event is going to run

//Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');