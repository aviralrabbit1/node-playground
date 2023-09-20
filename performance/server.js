const express = require('express');

const app = express();

// Naive approach, the amount of time it'll wait
function delay(duration) {
    const startTime = Date.now();    
    while (Date.now() - startTime < duration) {
        // event loop is blocked        
    }
}

app.get('/', (req, res) => {
    res.send('Performance example')
});

app.get('/timer', (req, res) => {
    // delay the response
    delay(9000);
    res.send('Delayed')
})

app.listen(3000);