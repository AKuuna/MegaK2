//events are sync!

const{EventEmitter} = require('events');



function clockTicking () {

const ee = new EventEmitter();

    setInterval( () => {
       ee.emit('secondElapsed', 'Test');
    }, 1000);

    setInterval( () => {
        ee.emit('fiveSecondElapsed', 'Test');
     }, 5000);

    return ee;
};

module.exports = {
    clockTicking,
  };
