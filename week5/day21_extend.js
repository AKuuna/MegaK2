const{EventEmitter} = require('events');

//extends give us access to methods of a class that is inherited

class ClockTicking extends EventEmitter { //while using extends super() is needed firstly in constructor?
    constructor() {
        super();

        setInterval( () => {
           this.emit('secondElapsed', 'Test');   //every object takes methods from EventEmitter so .this is enough
        }, 1000);
        
        setInterval( () => {
            this.emit('fiveSecondElapsed', 'Test');
         }, 5000);

    }
}

module.exports = {
    ClockTicking,
  };