const express = require('express');

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
    res.send('Performance example');
});

app.get('/timer', (req, res) => {
    // delay the response
    delay(9000);
    res.send('Delayed');
})

app.listen(3000);

