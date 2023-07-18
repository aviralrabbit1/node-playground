//  event loop has - callback queue - has tasks queue

//facade function, not really js, actually web api calling timer api
setTimeout(() => { 
    console.log('1', ' is the loneliest number'); // second to log
}, 0);


setTimeout(() => {
    console.log('2', ' isnt that bad number') //third to log
}, 1000);

// native way to handle async code with promise
// New Job queue - microtask queue, higher priority than callback queue
Promise.resolve("Yo").then((data)=> console.log('2',data))

console.log('3', ' is a crowd'); //first to log