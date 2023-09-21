const express = require('express');
const cluster = require('cluster');
// const os = require('os'); // help us create right number of worker processes

const app = express();

// Naive approach, the amount of time it'll wait
function delay(duration) { // simulating extreme worstcase of blocking behaviour
    const startTime = Date.now();    
    while (Date.now() - startTime < duration) {
        // event loop is blocked        
    }
}
// ran two instances of /timer, the second one started after the first one ended after 9 seconds

app.get('/', (req, res) => {
    // JSON.stringify({}) => "{}" // Blocking function
    // JSON.parse("{}") => {}
    res.send(`Performance example ${process.pid} `);
});

app.get('/timer', (req, res) => {
    // delay the response
    delay(5000);
    // res.send(`Delayed  ${process.pid}`);
    res.send(`Delayed again  ${process.pid}`); 
    // pm2 reload server -> zero downtime restart, reloads one by one
    // so that atleast one or two processes are always running
})

console.log('running server.js');
// if(cluster.isMaster){
//     // only exectured first time when server.js executes
//     console.log("Master process has started...");

//     // limit to the number of processess, to run efficiently, needs separate procesors
//     const NUM_WORKERS = os.cpus().length;
//     console.log(NUM_WORKERS + " = NUM_WORKERS");
//     for(let i=0; i < NUM_WORKERS; i++){
//         cluster.fork();  // Upto n requests at a time
//     }
// } else {
//     console.log('Worker process has started');
//     app.listen(3000);
// }

console.log('Worker process has started');
app.listen(3000);


// js and node don't follow multi threaded approach
// build and run multiple node processes side-by-side
// Node cluster module create copies of node process that run side by side

// node server.js -> master process
//  we run fork, master is copied as worker processes(take http requests) attached to single master
// differentiated by isMaster flag
// round - robin approach - each request sent to next subsequent servers one after another, 
// then repeat from first
// randomized static, random assignment of request to random server, by permutation

// Load balancing - process of distributing set of tasks over a set of resources for improved efficiency
// used for horzontal scaling, adding more servers/node processes

// Process manager 2 -> npm install pm2
// doesn't have to check isMaster flag, forks worker process by itself
// pm2 start server.js -> running master process 
// pm2 ls/list -> list of all processess
// pm2 stop {id} -> stops the server
// pm2 delete server -> deletes the server
// pm2 start server.js -i {number_of_process/max} -> -i = instance, how may processes
// pm2 logs
// pm2 restart server
// pm2 logs --lines 200 -> for last 200 lines
// pm2 start server.js -l logs logs.txt -i -> output logs in a file
// pm2 show {id}
// pm2 monit -> terminal monitoring 