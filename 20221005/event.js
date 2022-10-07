const EventEmitter = require('event');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트1');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
    console.log('이벤트 3');
});

myEvent.emit('event1');
myEvent.emit('event2');

myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', () => {
    console.log
})