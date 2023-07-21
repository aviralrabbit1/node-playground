const http = require('http');

const PORT = 3000;

// const server = http.createServer((req, res) => { //request listener
//     // req - header and data passsed from client
//     // res - create response writign some data and headers send back to client
//     res.writeHead(200, {
//         // 'Content-Type': 'text/plain',
//         'Content-Type': 'application/json',
//     });
//     // res.end('Hello Aviral, how are you doing?'); 
//     res.end(JSON.stringify({
//         name: "Aviral Verma", 
//         message: 'Hello Aviral, how are you doing?',
//     })); 
//     // response is complete and ready to be sent back, 
//     // needs to be called for each request
// }); 
const server = http.createServer();

server.on('request', (req, res) => { 
    if(req.url === '/friends'){
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            name: "Aviral Verma", 
            messages: 'Hello Aviral, how are you doing?',
        }));
    }
    else if(req.url === '/messages'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Aviral!</li>');
        res.write('<li>What are your thoughts on Humanity?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } 
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); //127.0.0.1 => localhost
