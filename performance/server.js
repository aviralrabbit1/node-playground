const express = require('express');
const cluster = require('cluster');



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
    res.send(`Delayed  ${process.pid}`);
})

console.log('running server.js');
if(cluster.isMaster){
    // only exectured first time when server.js executes
    console.log("Master process has started...");
    cluster.fork();
    cluster.fork();
} else {
    console.log('Worker process has started');
    app.listen(3000);
}


// js and node don't follow multi threaded approach
// build and run multiple node processes side-by-side
// Node cluster module create copies of node process that run side by side

// node server.js -> master process
//  we run fork, master is copied as worker processes(take http requests) attached to single master
// differentiated by isMaster flag
// round - robin approach