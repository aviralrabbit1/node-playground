const { Worker, 
    isMainThread,
    workerData
} = require('worker_threads');

if(isMainThread){
    console.log(`Main thread with process ID: ${process.pid}`);
    new Worker(__filename,{
        workerData: [7, 9, 5, 1]
    }); // will create workers over and over, recursively, if no conditions
    new Worker(__filename, {
        workerData: [8, 2, 1, 4]        
    });
} else {
    console.log(`Worker thread with process ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`); // side by side sort
}
