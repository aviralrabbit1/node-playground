// Node.js core API is built around an idiomatic asynchronous event-driven architecture 
// in which certain kinds of objects (called "emitters") emit named events 
// that cause Function objects ("listeners") to be called.
const EventEmitter = require('events'); // All objects that emit events are instances of the EventEmitter class

const celebrity = new EventEmitter(); 
// allows one or more functions to be attached to named events emitted by the object

// all of the functions attached to that specific event emitted by EventEmitter object are called synchronously. 
// Any values returned by the called listeners are ignored and discarded.

// subscribe to celebrity for observer 1
celebrity.on('race', (result) => {
    if( result === 'win'){
        console.log(" Congratulations on winning the race!");
    }
});

// subscribe to celebrity for observer 2 maybe
celebrity.on('race', (result) =>{
    if( result === 'lose'){
        console.log(" Better luck for the next race!");
    }
})

celebrity.emit('race', 'win');
celebrity.emit('race', 'lose');

// The process object is an instance of EventEmitter.
// The process object provides information about, and control over, the current Node.js process.
process.on('exit', (code) => { //The 'exit' event is emitted when the Node.js process is about to exit
    console.log('Process exit event with code: ', code);
});