const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => { //request listener
    // req - header and data passsed from client
    // res - create response writign some data and headers send back to client
    res.writeHead(200, {
        // 'Content-Type': 'text/plain',
        'Content-Type': 'application/json',
    });
    // res.end('Hello Aviral, how are you doing?'); 
    res.end(JSON.stringify({
        name: "Aviral Verma", 
        message: 'Hello Aviral, how are you doing?',
    })); 
    // response is complete and ready to be sent back, 
    // needs to be called for each request
}); 

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); //127.0.0.1 => localhost
