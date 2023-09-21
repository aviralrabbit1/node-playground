const { Worker, isMainThread} = require('worker_threads');

if(isMainThread){
    console.log(`Main thread with process ID: ${process.pid}`);
    new Worker(__filename); // will create workers over and over, recursively, if no conditions
    new Worker(__filename);
} else {
    console.log(`Worker thread with process ID: ${process.pid}`);
}
