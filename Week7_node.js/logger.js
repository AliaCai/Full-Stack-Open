const EventEmitter = require('events');
const uuid = require('uuid');//uuid modykes dowloadn in the beginning, uuid create randome universal format of if

//console.log(uuid.v4());//v4 - versiion 4 : f182f0d1-5711-440d-bb34-8135a49cc0cf

class Logger extends EventEmitter {
    log(msg) {
        //Call event -> every time call log  it shows a new id with msg it sends
        this.emit('message', {id : uuid.v4(), msg});
    }
}

//module.exports=Logger;

const Logger = require('./logger');
const logger = new Logger();//instantiate a logger as Logger is a class

logger.on('message', (data)=> console.log('Called Listener:', data));

logger.log('Hello World');//send a message
logger.log('Hi');//send a message
logger.log('Hello');//send a message