const http = require('http');

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Arijit Sahai'
    },
    {
        id: 1,
        name: 'Ujjwal Dhir'
    },
    {
        id: 2,
        name: 'Naveen Kumar'
    },
    {
        id: 3,
        name: 'Divyanand'
    },
    {
        id: 4,
        name: 'Pranjal Agarwal'
    }
]

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

    const items = req.url.split('/'); //splitting a url

    if(req.method === 'POST' && items[1] === 'friends'){
        // data passing as stream from the url, recieved as buffer
        req.on('data', (data) => {
            const friend = data.toString(); //converted to string to print
            console.log('Request: ', friend); 
            friends.push(JSON.parse(friend)); //converted to json to push into array
            // req.pipe(res); will pipe incomplete response here
        });
        req.pipe(res); // pipe the req listener after the data event
        // res.end() isn't required when req ends when we pipe
    } 
    else if(req.method === 'GET' && items[1] === 'friends'){ // req.url = /items[1]
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3){
            const friendIndex = Number(items[2])
            res.end(JSON.stringify(friends[friendIndex]));            
        }
        else {
            res.end(JSON.stringify(friends));
        }
    }
    else if(req.method === 'GET' && items[1] === 'messages'){
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
