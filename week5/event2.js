const{ClockTicking} = require('./day21_extend');

new ClockTicking()
    .once('secondElapsed', (data) => { 
    console.log('First sec!', data);
    })
    .on('secondElapsed', () => { 
    console.log('1 sec!');
    })
    .on('fiveSecondElapsed', () => { 
    console.log('5 sec!');
    });


