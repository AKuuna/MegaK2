const{clockTicking} = require('./day21_event_emitter');

const events = clockTicking();

//console.log(events);

events
    .once('secondElapsed', (data) => { //in a callback order is crucial, now it correspond to 1rst parameter - Test
    console.log('First sec!', data);
    })
    .on('secondElapsed', () => { //will happen only once
    console.log('1 sec!');
    })
    .on('fiveSecondElapsed', () => { //will happen only once
    console.log('5 sec!');
    });

//LONGER WAY:
// events.once('secondElapsed', (data) => { //in a callback order is crucial, now it correspond to 1rst parameter - Test
//     console.log('First sec!', data);
// });

// events.on('secondElapsed', () => { //will happen only once
//     console.log('1 sec!');
// });

// events.on('fiveSecondElapsed', () => { //will happen only once
//     console.log('5 sec!');
// });
